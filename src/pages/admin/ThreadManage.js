//dependencies
import React, { useState, useEffect } from 'react';

//Child component
import CustomedModal from '../components/Modal';
import Loading from "../components/Loading";

//Data table
import { MDBDataTableV5 } from 'mdbreact';

// Const Variables
const modalConfigs = {
    requestFailed: { header: "Failed", body: "Failed to send data to server!!!" },
    requestSucceed: { header: "Succeed", body: "Delete user successfully!!!" },
    confirmDelete: { header: "Warning", body: "Are you sure !!!" }
}

// Data Table Background Style
const backgroundStyle = {
    marginTop: "5%",
    height: "93%",
    width: "94%",
    color: "white",
    backgroundColor: "#19293B",
    borderRadius: "10px"
}

const ThreadManage = () => {
    // Declare Variable
    const [threadList, setThreadList] = useState([]);
    const [threadIdToDelete, setThreadIdToDelete] = useState(0);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [modalContent, setModalContent] = useState({});

    // Check Loading
    const [isLoading, setIsLoading] = useState('loading');

    // Show Modal
    const toggleModal = (modalConfig) => {
        setModalContent(modalConfig);
        setDeleteModalShow(!deleteModalShow);
    }

    // Set Close Modal
    const closeModal = () => {
        setDeleteModalShow(false);
    }

    // Show Delete Modal
    const toggleModalDelete = (modalConfig, threadId) => {
        setModalContent(modalConfig);
        setThreadIdToDelete(threadId);
        setDeleteModalShow(!deleteModalShow);
    }

    // Get all User From Database
    const listAllThread = async () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/thread`)
            .then(res => res.json())
            .then(res => {
                setThreadList(res);
                setIsLoading('succeed');
            });
    }

    //Load data when component mount
    useEffect(() => {
        listAllThread();
    },[]);

    // Delete Thread By ThreadId
    const deleteThread = (selectedThreadId) => {
        closeModal();
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/thread/${selectedThreadId}`,
            {
                method: "DELETE"
            }).then(res => {
                // Deleted successfully also filter selected thread
                if (res.status === 200) {
                    setThreadList(threadList.filter(thread => thread.threadId !== selectedThreadId));
                }
            });
    }

    //Datatable structure
    var datatable = ({
        columns: [
            {
                label: 'Title',
                field: 'title',
                width: 220,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Image',
                field: 'image',
                width: 220,
            },
            {
                label: 'Content',
                field: 'content',
                width: 220,
            },
            {
                label: 'User',
                field: 'username',
                width: 220,
            },
            {
                label: '',
                field: 'delete',
                width: 100,
            },
        ],
        rows: threadList.map(thread => {
            return (
                {
                    title: thread.title,
                    image: <div style={{ height: "8rem", width: "8rem", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url("data:image/jpeg;base64,${thread.image}` }}></div>,
                    content: thread.content,
                    username: thread.user.userName,
                    delete: <button onClick={() => toggleModalDelete(modalConfigs.confirmDelete, thread.threadId)} className="btn btn-danger">Delete</button>
                }
            );
        })
    });

    //Return loading when data loading
    if (isLoading === 'loading') {
        return (
            <Loading content="Loading threads from database..."/>
        )
    }

    return (
        <>
            <div className="p-3" style={backgroundStyle}>
                <MDBDataTableV5 style={{ color: "white" }} hover scrollY maxHeight='66vh' entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />
            </div>

            <CustomedModal
                modalHeader={modalContent.header}
                modalBody={modalContent.body}
                handleToggle={closeModal}
                show={deleteModalShow}
                deleteBtn={{ btnFunction: deleteThread, message: "Delete", idToDelete: threadIdToDelete }}
            />
        </>
    );
}

export default ThreadManage;