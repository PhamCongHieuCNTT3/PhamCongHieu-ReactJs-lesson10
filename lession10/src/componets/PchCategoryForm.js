import React, { useState } from 'react';
import axios from '../api/PchApi';

export default function PchCategoryFrom({ onCloseForm, onCategorySubmit }) {
    const [PchCategoryName, setPchCategoryName] = useState("");
    const [PchCategoryStatus, setPchCategoryStatus] = useState(true);

    const PchHandleClose = () => {
        onCloseForm(false);
    }

    const PchHandleSubmit = async (event) => {
        event.preventDefault();
        let PchCategory = {
            PchId: 0,
            PchCategoryName: PchCategoryName,
            PchCategoryStatus: PchCategoryStatus
        };
        console.log("PchCategory", PchCategory);
        await axios.post("PchCategory", PchCategory);
    }

    return (
        <div>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Category Name</span>
                    <input
                        type="text"
                        className="form-control"
                        name='PchCategoryName'
                        value={PchCategoryName}
                        onChange={(ev) => setPchCategoryName(ev.target.value)}
                        placeholder="Category Name"
                        aria-label="Category Name"
                        aria-describedby="basic-addon1"
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon2">Category Status</span>
                    <select
                        name='PchCategoryStatus'
                        value={PchCategoryStatus}
                        onChange={(ev) => setPchCategoryStatus(ev.target.value === 'true')}
                        className='form-select'
                    >
                        <option value={true}>Hien thi</option>
                        <option value={false}>Tam khoa</option>
                    </select>
                </div>
                <button className='btn btn-success' onClick={PchHandleSubmit}>Thêm mới</button>
                <button className='btn btn-danger' onClick={PchHandleClose}>Đóng</button>
            </form>
        </div>
    );
}