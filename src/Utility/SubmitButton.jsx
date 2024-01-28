const SubmitButton = (props) => {
    if (props.submit === false) {
        return (
            <button
                onClick={props.onClick}
                type={"submit"}
                className={props.className}
            >
                {props.text}
            </button>
        );
    } else {
        return (
            <button disabled={true} className={props.className}>
                Processing...
            </button>
        );
    }
};

export default SubmitButton;
