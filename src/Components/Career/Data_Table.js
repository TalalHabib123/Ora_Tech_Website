import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SerachBar';
import PopupModal from './PopUpCom';
import {saveJobApplication} from "../../Firebase_Setup/job_submission";

const TableComponent = ({ data }) => {
    const rowsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [RenderData, setRenderData] = useState(data);  
    
    const [Position, setPosition] = useState(null);  
    const [Department, setDepartment] = useState(null);  
    const handleFilterData = (searchValue) => {
        if(searchValue===''){
            setCurrentPage(1);
            setRenderData(data);
        }

        else{
            const filteredResults = data.filter((item) => {
                const { name, age } = item;
                return name.toLowerCase().includes(searchValue.toLowerCase()) || age.toLowerCase().includes(searchValue.toLowerCase());
            });
            setCurrentPage(1);
            setRenderData(filteredResults);         
        }

    };

    const handleClick = (Position, Department) => {
        console.log(Position, Department);
        setShowModal(true);
        setPosition(Position);
        setDepartment(Department);
    };

    const totalPages = Math.ceil(RenderData.length / rowsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };


    const renderRows = () => {
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        const currentRows = RenderData.slice(indexOfFirstRow, indexOfLastRow);

        return currentRows.map((row) => (
        <tr key={row.id}>
            <td className='id-row'>{row.id}</td>
            <td className='postion-row'>{row.name}</td>
            <td className='depart-row'>{row.age}</td>
            <td className='button-row'>
            <button onClick={() => handleClick(row.name, row.age)}>Apply Now</button>
            </td>
        </tr>
        ));
    };

    const renderPagination = () => {
        const pages = [];

        if (totalPages <= 4) {
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
            <button key={i} onClick={() => handlePageChange(i)}>
                {i}
            </button>
            );
        }
        } else {
        if (currentPage <= 2) {
            for (let i = 1; i <= 3; i++) {
            pages.push(
                <button key={i} onClick={() => handlePageChange(i)}>
                {i}
                </button>
            );
            }
            pages.push(<span key="ellipsis-right">...</span>);
            pages.push(
            <button key={totalPages} onClick={() => handlePageChange(totalPages)}>
                {totalPages}
            </button>
            );
        } else if (currentPage >= totalPages - 1) {
            pages.push(
            <button key={1} onClick={() => handlePageChange(1)}>
                1
            </button>
            );
            pages.push(<span key="ellipsis-left">...</span>);
            for (let i = totalPages - 2; i <= totalPages; i++) {
            pages.push(
                <button key={i} onClick={() => handlePageChange(i)}>
                {i}
                </button>
            );
            }
        } else {
            pages.push(
            <button key={1} onClick={() => handlePageChange(1)}>
                1
            </button>
            );
            pages.push(<span key="ellipsis-left">...</span>);
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pages.push(
                <button key={i} onClick={() => handlePageChange(i)}>
                {i}
                </button>
            );
            }
            pages.push(<span key="ellipsis-right">...</span>);
            pages.push(
            <button key={totalPages} onClick={() => handlePageChange(totalPages)}>
                {totalPages}
            </button>
            );
        }
        }

        return (
        <>
            {currentPage > 1 && (
            <>
                <button onClick={handleFirstPage}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} />
                </button>
                <button onClick={handlePrevPage}>
                <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            </>
            )}
            {pages}
            {currentPage < totalPages && (
            <>
                <button onClick={handleNextPage}>
                <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button onClick={handleLastPage}>
                <FontAwesomeIcon icon={faAngleDoubleRight} />
                </button>
            </>
            )}
        </>
        );
    };

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({});

    const handleHideModal = () => {
        setShowModal(false);
    };

    const handleSaveData = (data2, cvFile) => {
        setFormData(data2);
        saveJobApplication(formData,cvFile);
    };

    return (
        <><div className='table-div'>
            <h3>
                Job Listings
            </h3>
            <SearchBar filterData={handleFilterData} />
            <table className='the-table'>
                <thead>
                <tr>
                    <th className='ID'>ID</th>
                    <th className='position'>Position</th>
                    <th className='depart'>Department</th>
                    <th className='Action'></th>
                </tr>
                </thead>
                <tbody>{renderRows()}</tbody>
            </table>
            <div  className='page-change'>
                {renderPagination()}
            </div>
        </div>
        <PopupModal
            show={showModal}
            onHide={handleHideModal}
            onSave={handleSaveData}
            Position={Position}
            Department={Department}
        />
        </>
    );
};

export default TableComponent;
