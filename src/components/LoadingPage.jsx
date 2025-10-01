export function LoadingPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="mb-4 text-gray-600 text-center">
                it may take a while due to the low deployment cpu capacity
            </p>
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-500"></div>
        </div>
    );
}