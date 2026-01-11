import Modal from 'react-modal';
import { useState } from 'react';
function CreateProduct() {
    const [modalIsOpen, setIsOpen] = useState(false);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    // fetch("http://192.168.100.106:8082/api/building?fbclid=IwY2xjawNQwLRleHRuA2FlbQIxMABicmlkETExeURKemNFSGJnQUJQYU9QAR6sQx49kftqRVmdywopBeaHO3OaCYVxXMhLAqKFwWrbcANXpvJMJwUMkWH1iQ_aem_IaE_p1YHXSr45iHBRjl8Zg",{
    //     method:"POST",
    //     headers:{
    //         Accept: "application/json",
    //         "Content-Type" : "application/json"
    //     },
    //     body: JSON.stringify(data)
    // }
    // )
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e);
    }
    
    return (
        <>
            <button onClick={openModal}>+ Them san pham</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <form onSubmit={handleSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    Ten
                                </td>
                                <td>
                                    <input type='text' name='title' ></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Duong pho
                                </td>
                                <td>
                                    <select name='category'>
                                        <option value="danh muc 1`">danh muc 1</option>
                                        <option value="danh muc 2`">danh muc 2</option>
                                        <option value="danh muc 3`">danh muc 3</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Quan/Huyen
                                </td>
                                <td>
                                    <input type='number' name='price'></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Số tầng
                                </td>
                                <td>
                                    <input type='number' name='discountPercentage'></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Diện tích sàn
                                </td>
                                <td>
                                    <input type='number' name='stock'></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Tầng
                                </td>
                                <td>
                                    <input type='link' name='thumbnail'></input>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Mã
                                </td>
                                <td>
                                    <textarea rows={4} name='description'></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Mã
                                </td>
                                <td>
                                    <textarea rows={4} name='description'></textarea>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button onClick={closeModal}>Huy</button>
                                </td>
                                <td>
                                    <button>Tao moi</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </Modal>
        </>
    )
}
export default CreateProduct;