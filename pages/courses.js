// JavaScript source code
export default function Courses() {
    const courses = [
        {
            title: "Project Finance Loan Documentation",
            description: "Understand the key clauses, risks, and negotiation strategies behind major loan agreements.",
        },
        {
            title: "Tax Equity Modeling",
            description: "Build advanced tax equity structures using Excel models and IRS rules.",
        },
        {
            title: "Electricity Markets & the Grid (U.S. Focus)",
            description: "Learn how power flows, clears, and settles — and how PJM, CAISO, and FERC regulate it all.",
        },
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900 px-6 py-20">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {courses.map((course, index) => (
                        <div key={index} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
                            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                            <p className="text-gray-700">{course.description}</p>
                            <a
                                href="#"
                                className="inline-block mt-4 text-blue-600 font-semibold hover:underline"
                            >
                                View Details
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
