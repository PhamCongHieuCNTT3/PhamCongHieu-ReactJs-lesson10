import React from 'react'

export default function PchCategoryList({ renderPchCateGories, onAddNew }) {
    console.log("renderPchCategories: ", renderPchCateGories);
    let PchCategoryElement = renderPchCateGories.map((PchCategory, index) => {
        return (
            <tr key={index}>
                <th>{index + 1}</th>
                <td>{PchCategory.PchId}</td>
                <td>{PchCategory.PchCategoryName}</td>
                <td>{PchCategory.PchCategoryStatus ? "Hien thi" : "Tam khoa"}</td>
            </tr>
        )
    })

    const PchHandleAdd = ()=>{
        onAddNew(true);
    }
    return (
        <div className='container m-2'>
            <h2>Danh sach loai san pham</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ma loai</th>
                        <th>Ten loai</th>
                        <th>Trang thai</th>
                        <th>Chuc nang</th>
                    </tr>
                </thead>
                <tbody>
                    {PchCategoryElement}
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={PchHandleAdd}>Them moi</button>
        </div>
    )
}