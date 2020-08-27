import React, { useState } from 'react';
import {Button,Form,Input, FormGroup,Col,Card,CardBody, CardTitle, CardText} from 'reactstrap'
function TodoListHooks(){
    const [item,setItem] = useState("");
    const [itemList,setItemList] = useState([]);

    const addlist=()=>{
        setItemList([...itemList,{
            text:item
        }])
    }
    const handleSubmit=e=>{
        e.preventDefault();
        if(item==="") return;
        addlist();
        setItem("")
    }
    return(
        <div className= "container">
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <Card className="card-size" color="danger">
                        <CardBody>
                            <CardTitle className="cardtitle">
                                <div className="row">
                                    <div className="col-12">
                                        <h3>Add Items to your to-do list!</h3>
                                    </div>
                                    <div  className="col-12">
                                    <Form onSubmit={handleSubmit}>
                                        <FormGroup row>
                                            <Col>
                                                <Input type="text" value={item} placeholder="Add Task" onChange={e=>setItem(e.target.value)}/>
                                            </Col>
                                            <Button type="submit" color="primary" className="btn-md" md={2}>Add Item</Button>
                                        </FormGroup>
                                    </Form>
                                    </div>
                                </div>
                            </CardTitle>
                            <CardText>
                                    <ul>
                                        {itemList.map(items=>(
                                        <li>
                                            <div className="row">
                                                <div className="col-10">
                                                <h4 className="text">{items.text}</h4>
                                                </div>
                                                <Button className="btn-sm deletebutton">x</Button>
                                            </div>
                                        </li>
                                        ))}  
                                    </ul>
                            </CardText>
                        </CardBody>
                    </Card>
                    {/* <Form onSubmit={handleSubmit}>
                        <FormGroup row>
                            <Col md={4}>
                                <Input type="text" value={item} onChange={e=>setItem(e.target.value)}/>
                            </Col>
                            <Button type="submit" color="primary" className="btn-md" md={2}>Add Item</Button>
                        </FormGroup>
                    </Form> */}
                </div>
            </div>
            {/* <div className="row row-content">
                <div className="col-12 col-md-9">
                    <ul>
                            {itemList.map(items=>(
                                <li>
                                    {items.text}
                                </li>
                             ))}  
                    </ul>
                </div>
            </div> */}
        </div>
    )
}

export default TodoListHooks   