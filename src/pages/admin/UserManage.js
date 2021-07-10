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
    marginTop: "70px",
    marginBottom: "70px",
    color: "white",
    backgroundColor: "#19293B",
    borderRadius: "10px"
}

const UserManage = () => {
    // Declare Variable
    const [userList, setUserList] = useState([]);
    const [userIdToDelete, setUserIdToDelete] = useState(0);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [modalContent, setModalContent] = useState({});

    // Check Loading
    const [isLoading, setIsLoading] = useState('loading');

    // Set Close Modal
    const closeModal = () => {
        setDeleteModalShow(false);
    }

    // Show Delete Modal
    const toggleModalDelete = (modalConfig, userId) => {
        setModalContent(modalConfig);
        setUserIdToDelete(userId);
        setDeleteModalShow(!deleteModalShow);
    }

    // Get all User From Database
    const listAllUser = async () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/user`)
            .then(res => res.json())
            .then(res => {
                setUserList(res);
                setIsLoading('succeed');
            });
    }

    //Load data when component mount
    useEffect(() => {
        listAllUser();
    },
        []
    );

    // Delete User By UserId
    const deleteUser = (selectedUserId) => {
        closeModal();
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/user/${selectedUserId}`,
            {
                method: "DELETE"
            }).then(res => {
                // Deleted successfully
                if (res.status === 200) {
                    setUserList(userList.filter(user => user.userId !== selectedUserId));
                }
            });
    }

    //Datatable structure
    var datatable = ({
        columns: [
            {
                label: 'User ID',
                field: 'userId',
                width: 100,
            },
            {
                label: 'Avatar',
                field: 'avatar',
                width: 87,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Full name',
                field: 'fullname',
                width: 220,
            },
            {
                label: 'Username',
                field: 'username',
                width: 220,
            },
            {
                label: 'Email',
                field: 'email',
                width: 220,
            },
            {
                label: 'Gender',
                field: 'gender',
                width: 80,
            },
            {
                label: '',
                field: 'delete',
                width: 100,
            },
        ],
        rows: userList.map(u => {
            return (
                {
                    userId: u.userId,
                    avatar: <div style={{ height: "5rem", width: "5rem", backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url("data:image/jpeg;base64,${u.avatar}` }}></div>,
                    fullname: u.fullname,
                    username: u.userName,
                    email: u.email,
                    gender: u.gender,
                    delete: <button onClick={() => toggleModalDelete(modalConfigs.confirmDelete, u.userId)} className="btn btn-danger">Delete</button>
                }
            );
        })
    });

    //Return loading when data loading
    if (isLoading === 'loading') {
        return (
            <Loading content="Loading users from database..." />
        )
    }

    return (
        <>
            <div className="ms-1 p-3 h-auto" style={backgroundStyle}>
                <MDBDataTableV5 style={{ color: "white" }} hover scrollY maxHeight='66vh' entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />
            </div>

            <CustomedModal
                modalHeader={modalContent.header}
                modalBody={modalContent.body}
                handleToggle={closeModal}
                show={deleteModalShow}
                deleteBtn={{ btnFunction: deleteUser, message: "Delete", idToDelete: userIdToDelete }}
            />
        </>
    );
}

export default UserManage;