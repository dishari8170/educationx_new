import React, { useState } from "react";

function QuizForm() {
    const [questions, setQuestions] = useState([{ title: "", options: ["", ""] }]);

    const addClick = () => {
        setQuestions((prevState) => ([...prevState, { title: "", options: [] }]));
    };

    const removeClick = (i) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(i, 1);
        setQuestions(updatedQuestions);
    };

    const removeOption = (qi, i) => {
        const updatedQuestions = [...questions];
        const options = [...updatedQuestions[qi].options];
        options.splice(i, 1);
        updatedQuestions[qi] = { ...updatedQuestions[qi], options };
        setQuestions(updatedQuestions);
    };

    const handleSubmit = (event) => {
        alert("A name was submitted: " + JSON.stringify(questions));
        event.preventDefault();
    };

    const handleChange = (i, e) => {
        const { name, value } = e.target;
        const updatedQuestions = [...questions];
        updatedQuestions[i] = { ...updatedQuestions[i], [name]: value };
        setQuestions(updatedQuestions);
    };

    const handleOptions = (qi, i, e) => {
        const { name, value } = e.target;
        const updatedQuestions = [...questions];
        const options = [...updatedQuestions[qi].options];
        options[i] = { ...options[i], [name]: value };
        updatedQuestions[qi] = { ...updatedQuestions[qi], options };
        setQuestions(updatedQuestions);
    };

    const addOption = (i) => {
        const updatedQuestions = [...questions];
        updatedQuestions[i] = {
            ...updatedQuestions[i],
            options: [...updatedQuestions[i].options, { title: "" }],
        };
        setQuestions(updatedQuestions);
    };

    const createQuestions = () => {
        console.log(questions);
        return questions.map((el, i) => (
            <div className="d-flex flex-row bd-highlight mb-3" key={i}>
                <input
                    placeholder="Title"
                    name="title"
                    value={el.title || ""}
                    onChange={(e) => handleChange(i, e)}
                />
                <div className="pl-4">{createOptions(i)}</div>
                <input
                    type="button"
                    value="add options"
                    onClick={() => addOption(i)}
                />
                <input
                    type="button"
                    value="remove"
                    onClick={() => removeClick(i)}
                />
            </div>
        ));
    };

    const createOptions = (qi) => {
        return questions[qi].options.map((el, i) => (
            <div key={i}>
                <input
                    placeholder="Title"
                    name="title"
                    value={el.title || ""}
                    onChange={(e) => handleOptions(qi, i, e)}
                />
                <input
                    type="button"
                    value="remove"
                    onClick={() => removeOption(qi, i)}
                />
            </div>
        ));
    };

    return (
        <form onSubmit={handleSubmit}>
            {createQuestions()}
            <input
                type="button"
                value="add more"
                onClick={addClick}
            />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default QuizForm;
