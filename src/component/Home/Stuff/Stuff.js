import React from 'react';
import { Container } from 'react-bootstrap';
import './Stuff.css'

const Stuff = () => {
    return (
        <div className="py-5">
            <Container>
                <h1 className="py-3 text-warning" style={{ fontSize: "3rem", textAlign: 'center' }}>Our Stuff</h1>
                <div className="row">
                    <div className="col-12 col-md-5">
                        <div className="text-start ">
                            <h1 className="text-warning">Have a look to our stuff</h1>
                            <p> Dolor sit amet consectetur adipisicing elit. Distinctio eveniet impedit molestiae assumenda beatae commodi aliquid ad repellat earum, aut consequatur quos eos non quibusdam ea dicta accusamus nesciunt eaque vitae saepe voluptatum deserunt error blanditiis fugit. At velit reiciendis quisquam ad est modi, enim incidunt ducimus maiores iure quod!</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-7">
                        <div className="stuffGrid mx-auto w-100">
                            <div style={{ height: '80%', width: '100%', border: '2px solid tomato' }}><img className="w-100 mx-auto h-100" src="https://image.freepik.com/free-photo/smiling-asian-woman-physician-white-coat_9083-2472.jpg" alt="" /></div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Stuff;