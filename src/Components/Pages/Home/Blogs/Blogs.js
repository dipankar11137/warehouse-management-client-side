import React from 'react';
import { Table } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
    return (
        <div className='container mt-3  bg-white'>
            <Helmet>
                <title>Blogs-Warehouse</title>
            </Helmet>
            <h1 className='text-center fw-bold'>THIS IS BLOGS</h1>
            <div className='shadow-lg p-1 text-center '>
                <h3 className='text-start p-3'>1 . Difference between javascript and nodejs .</h3>
                <Table bordered hover>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Javascript</th>
                            <th>NodeJS</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>JavaScript is a programming language used to write scripts on websites.</td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with NodeJS.</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>It is basically used on the client-side.</td>
                            <td>It is mostly used on the server-side.</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Javascript is capable enough to add HTML and play with the DOM. </td>
                            <td>Nodejs does not have capability to add HTML tags.</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                            <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Javascript is used in frontend development.</td>
                            <td>Nodejs is used in server-side development.</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                            <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++. </td>
                            <td>Nodejs is written in C, C++ and Javascript.</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='shadow-lg mt-5 p-2'>
                <h3 className='p-3'>2. When should you use nodejs and when should you use mongodb ?</h3>
                <p><span className='fw-bold fs-5'>Answer : </span>Node. js is primarily used for non-blocking, event-driven servers, due to its single-thread nature. It is used for traditional web sites and back-end API services, but was designed with real-time, push-based architecture in mind.6t</p>
                <h5 className='fw-bold'>mongodb : </h5>
                <p>If SQL is your data document-centric and does not fit well with the relational database schema, then when you have to compromise on a large scale, when you are prototyping quickly, and for some other uses, NoSQL databases like MongodB are a good choice</p>
            </div>
            <div className='shadow-lg mt-5 p-2'>
                <h3 className='p-3'>3.  Differences between sql and nosql databases.</h3>
                <p><span className='fw-bold fs-5'>Answer : </span></p>
                <Table striped bordered hover variant="dark" className='text-center fs-5'>
                    <thead>
                        <tr>
                            <th>SQL</th>
                            <th>NoSQL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)	</td>
                            <td>Non-relational or distributed database system.</td>
                        </tr>
                        <tr>
                            <td>These databases have fixed or static or predefined schema</td>
                            <td>They have dynamic schema</td>
                        </tr>
                        <tr>
                            <td>These databases are not suited for hierarchical data storage.</td>
                            <td>These databases are best suited for hierarchical data storage.</td>
                        </tr>
                        <tr>
                            <td>These databases are best suited for complex queries</td>
                            <td>These databases are not so good for complex queries</td>
                        </tr>
                        <tr>
                            <td>Vertically Scalable</td>
                            <td>Horizontally scalable</td>
                        </tr>
                        <tr>
                            <td>Follows ACID property</td>
                            <td>Follows CAP(consistency, availability, partition tolerance)</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
            <div className='shadow-lg mt-5 p-2'>
                <h3 className='p-3'>4. What is the purpose of jwt and how does it work</h3>
                <p><span className='fw-bold fs-5'>Answer : </span>JWT, or JSON Web Token, is an open value that is used to share security information between two parties - a client and a server. Each JWT contains an encoded JSON object, which contains a set of claims. JWT is signed using a cryptographic algorithm so that claims cannot be changed after the token has been issued.</p>
                <h5>Its Works : </h5>
                <p>JWTs differ from other web tokens in that they contain a set of claims. The claim is used to transmit information between the two parties. What these claims are depends on the use at hand. For example, a claimant may claim who issued the token, how long it was valid, or what permission was granted to the client.

                    A JWT is a string consisting of three parts, separated by dots (.) And sorted using base 64. In the most common serialization format, compact serialization, JWT looks something like this: xxxxx.yyyyy.zzzzz.

                    Once decoded, you get two JSON strings:

                    Header and payload.
                    Signature.
                    The JOSE (JSON Object Signing and Encryption) header contains token types - in this case JWT - and the signing algorithm.

                    Payload claims are 6 It appears as a JSON string, usually with no more than a dozen fields to keep the JWT compact. This information is usually used by the server to verify that the user has permission to perform the requested actions.

                    There are no mandatory claims for JWT, but overlaying standards can make claims mandatory. For example, when using JWT as a carrier access token under OAuth2.0, iss, sub, aud and exp must be present. Some are more common than others.

                    The signature confirms that the token has not been changed. The parties that create the JWT sign the title and payload in a confidential manner that is known to both the issuer and the recipient, or only with a private key known to the sender. When the token is used, the recipient verifies that the title and payload match the signature. </p>
            </div>
            <div className='p-5'>

            </div>
        </div>
    );
};

export default Blogs;