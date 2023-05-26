import React, { useRef } from "react";
import { Accordion } from "react-bootstrap";
import "./Blog.css";
import { useReactToPrint } from "react-to-print";

const Blog = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className="blog">
      <div className="text-center mt-5">
        <h2>Blog F&Q :</h2>
      </div>

      <div className="container ">
        <Accordion
          ref={componentRef}
          defaultActiveKey="0"
          className="my-container mt-5 mb-5 pb-5"
        >
          <Accordion.Item eventKey="1" className="item">
            <Accordion.Header>
              i. Tell us the differences between uncontrolled and controlled
              components.
            </Accordion.Header>
            <Accordion.Body>
              In React, controlled components refer to components that have
              their state and behavior controlled by the parent component. These
              components rely on props passed down from the parent component to
              update their state and behavior. Uncontrolled components refer to
              components that manage their own state internally.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="item">
            <Accordion.Header>
              ii. How to validate React props using PropTypes ?
            </Accordion.Header>
            <Accordion.Body>
              Props or “Properties” are read-only components, that gives a way
              to pass data from one component to other components. It is an
              immutable object that works similarly to the HTML attributes. The
              props cannot be modified from inside the component as they are
              immutable. Thus, it is required to use props validation to make
              code more readable and to avoid future bugs and problems. Prop
              validation is a tool that si used to force the correct usage of
              the components. App.propTypes is used for props validation. It is
              used to get the warnings on JavaScript console, if the props are
              passed with an invalid type.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="item">
            <Accordion.Header>
              iii. Tell us the difference between nodejs and express js.
            </Accordion.Header>
            <Accordion.Body>
              NodeJS is an event-driven, non-blocking I/O model using JavaScript
              as its main language. It helps to build scalable network
              applications. Express is a minimal and flexible Node. js web
              application framework that provides a robust set of features for
              web and mobile applications.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className="item">
            <Accordion.Header>
              iv. What is a custom hook, and why will you create a custom hook ?
            </Accordion.Header>
            <Accordion.Body>
              Custom React JS hooks are reusable functions that a React JS
              software developer can use to add special and unique functionality
              to the React applications. Usually, if there is a requirement to
              add a feature, one can install a third-party library and solve the
              problem. But what if there is no such library with hooks that can
              be used? This problem is solved by using custom React JS hooks.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="d-flex align-items-center justify-content-center">
          <button onClick={handlePrint} className="py-2 px-3">
            Download to PDF Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
