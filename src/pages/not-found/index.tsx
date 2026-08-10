import notFoundImg from "../../assets/images/error-404.jpg";

function NotFoundPage() {
    return (
        <div className="flex justify-center items-center relative min-h-[calc(100vh-69px)] bg-[var(--bg)] overflow-hidden">
            <img src={notFoundImg} alt="404 Not Found" />
        </div>
    );
}

export default NotFoundPage;