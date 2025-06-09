export default function Projects() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white p-4 pt-20">
            <h1 className="text-4xl font-bold mb-6">Projects</h1>
            <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-2">Project 1</h2>
                    <p className="text-gray-300">
                        Description of your first project will go here.
                    </p>
                </div>
                {/* Add more project cards as needed */}
            </div>
        </main>
    );
} 