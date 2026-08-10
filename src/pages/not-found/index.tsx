import notFoundImg from "../../assets/images/error-404.jpg";

function NotFoundPage() {
    return (
        <div className="flex justify-center items-center">
            <img src={notFoundImg} alt="404 Not Found" />
        </div>
    );
}

export default NotFoundPage;