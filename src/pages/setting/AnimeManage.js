//dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomedModal from '../components/Modal';

//Data table
import { MDBDataTableV5 } from 'mdbreact';

//Custom css
import './AnimeManage.css';

const AnimeManage = () => {
    // Const Variables
    const modalConfigs = {
        requestFailed: { header: "Failed", body: "Failed to send data to server!!!" },
        requestSucceed: { header: "Succeed", body: "Delete anime successfully!!!" },
        confirmDelete: { header: "Warning", body: "Are you sure !!!" }
    }
    const [animeIdToDelete, setAnimeIdToDelete] = useState(0);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const [modalContent, setModalContent] = useState({});
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
    const toggleModalDelete = (modalConfig, animeId) => {
        setModalContent(modalConfig);
        setAnimeIdToDelete(animeId);
        setDeleteModalShow(!deleteModalShow);
    }

    //List to store anime
    const [animeList, setAnimeList] = useState([]);

    //Fetch data function load when mounting component
    const listAllAnime = async () => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/anime/all`).then(res => res.json()).then(res => setAnimeList(res));
    };

     // Delete User By UserId
     const deleteAnime = (selectedAnimeId) => {
        closeModal();
        fetch(`${process.env.REACT_APP_BACKEND_URL}api/anime/${selectedAnimeId}`,
            {
                method: "DELETE"
            }).then(res => {
                // Deleted successfully
                if (res.status === 200) {
                    setAnimeList(animeList.filter(anime => anime.animeId !== selectedAnimeId));
                }
            });
    }

    useEffect(() => {
        listAllAnime();
    }, []);

    //Datatable structure
    var datatable = ({
        columns: [
            {
                label: 'Thumbnail',
                field: 'thumbnail',
                width: 220,
                attributes: {
                    'aria-controls': 'DataTable',
                    'aria-label': 'Name',
                },
            },
            {
                label: 'Anime Name',
                field: 'animeName',
                width: 200,
            },
            {
                label: 'Status',
                field: 'status',
                width: 100,
            },
            {
                label: 'View',
                field: 'view',
                width: 100,
            },
            {
                label: 'Episode',
                field: 'episode',
                width: 100,
            },
            {
                label: 'Studio',
                field: 'studio',
                width: 100,
            },
            {
                label: '',
                field: 'update',
                width: 80,
            },
            {
                label: '',
                field: 'delete',
                width: 80,
            },
        ],
        rows: animeList.map(a => {
            return (
                {
                    thumbnail: <div style={{ height: "15rem", width: "10rem", backgroundSize: "cover", backgroundImage: `url("data:image/jpeg;base64,${a.thumbnail}` }}></div>,
                    animeName: a.animeName,
                    status: a.status,
                    view: a.view,
                    episode: (a.episode !== "null") ? a.episode : "updating",
                    studio: (a.studio !== null) ? a.studio.studioName : "updating",
                    update: <Link to={`/setting/anime/form/${a.animeId}`} className="btn btn-warning">Edit</Link>,
                    delete: <button onClick={()=> toggleModalDelete(modalConfigs.confirmDelete, a.animeId)} className="btn btn-danger">Delete</button>
                }
            );
        })

    });

    const backgroundStyle = {
        marginTop: "70px",
        marginBottom: "70px",
        color: "white",
        backgroundColor: "#19293B",
        borderRadius: "10px"
    }

    return (
        <div className="mx-5 p-3 h-auto" style={backgroundStyle}>
            <Link to={`/setting/anime/form`} className="btn btn-success m-2">Add new</Link>
            <MDBDataTableV5 style={{ color: "white" }} hover scrollY maxHeight='66vh' entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />
            <CustomedModal
                modalHeader={modalContent.header}
                modalBody={modalContent.body}
                handleToggle={closeModal}
                show={deleteModalShow}
                deleteBtn={{ btnFunction: deleteAnime, message: "Delete", idToDelete: animeIdToDelete }}
            />
        </div>

    );
}

export default AnimeManage;