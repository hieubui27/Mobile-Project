import { useEffect, useReducer, useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./ProductList.scss"
const init = {
    products: []
}

const reducer = (state, action) => {
    //Create,Delete,Update
    return {
        products: action.products
    };
    //Delete

}

function ProductList() {
    const [page,setPage] = useState(1);
    const [data, dispatch] = useReducer(reducer, init);
    const [checkPage,setCheckPage]=useState(true);
    const [categoryList,setCategoryList]=useState([]);
    let category=[];
    useEffect(() => {
        fetch('http://192.168.100.106:8081/api/building')
            .then(res => res.json())
            .then(data => {
                data.map(item=>{
                    if(!category.includes(item.brand)){
                category.push(item.brand);
            }
                })
                setCategoryList(category);
                console.log(category);
                console.log(data);
                dispatch({
                    products: data
                })
            })
    }, [])
    console.log(categoryList);
    // const deleteHandle =(id)=>{
    //     fetch(`http://localhost:3000/products/${id}`,{
    //         method: "DELETE"
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         dispatch({
    //             products:data
    //         })
    //     })

    // }
    console.log(data);
    const submitHandle = (e) => {
        e.preventDefault();
        const search = e.target.elements.search.value;
        fetch(`http://192.168.100.106:8081/api/building?brand=${search}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                
                dispatch({
                    products: data
                })
            }
            )
    }

    const prevHandle=(e)=>{
            fetch(`http://192.168.100.106:8081/api/building?page=${page-1}`)
            .then(res => res.json())
            .then(data => {
                if(data.length>0){
                    setCheckPage(true)
                }
                else setCheckPage(false)
            })
            console.log(page);
        
        if(checkPage===true && page>1){
            setPage(page-1);
            fetch(`http://192.168.100.106:8081/api/building?page=${page}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({
                    products: data
                })
            })
        }
       
        
    }

    const nextHandle=(e)=>{
            fetch(`http://192.168.100.106:8081/api/building?page=${page+1}`)
            .then(res => res.json())
            .then(data => {
                if(data.length>0){
                    setCheckPage(true)
                }
                else setCheckPage(false)
            })
        
        if(checkPage === true){
            setPage(page+1);
            fetch(`http://192.168.100.106:8081/api/building?page=${page}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({
                    products: data
                })
            })
        }
        
    }

    const brandSortHandle=(brand)=>{
        fetch(`http://192.168.100.106:8081/api/building?brand=${brand}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({
                    products: data
                })
            })
    }
    return (
        <>  
        
            <Container>
                <Row className="body">
                    <Col xl={4} className="body_menu">
                        <form onSubmit={submitHandle}>
                            <input type="text" name="search"></input>
                            <button>Tim</button>
                        </form>
                        <div className="body__brand">
                            {categoryList && categoryList.map(item=>(
                                <button onClick={()=>brandSortHandle(item)}>{item}</button>
                            ))}
                        </div>
                    </Col>
                    <Col xl={8} className="body__product">
                    <Row  className="product " >
                        {data && data.products.map(item => (
                        <Col xl={2} lg={3} md={4}  className="product__item p-3 mb-4 m-2" >
                        
                        <div className="product__image">
                            <img src={item.image_url} alt={item.model}/>
                        </div>
                        <p className="product__price">{item.price?.toLocaleString('vi-VN',{
                            style:"currency",
                            currency: "VND"
                        }) ?? "Liên hệ"}</p>
                        <h3 className="product__title">{item.model}</h3>
                        
                        {/* <button onClick={()=>{deleteHandle(item.id)}}>Delete</button> */}
                        <button>Update</button>
                    </Col>
                    ))}
                    <Col className="product__button">
                        <button className="button prevButton" onClick={prevHandle}>Prev</button>
                        <button className="button nextButton" onClick={nextHandle}>Next</button>
                    </Col>
                    
                </Row>
                
                </Col>
                    
                </Row>
                
            </Container>
            


        </>
    )

}

export default ProductList;