
const Error = ({mensaje}) => {
    return (
        <div className="alert alert-danger text-center" role="alert">
            <p>{mensaje}</p>
        </div>
    )
}

export default Error
