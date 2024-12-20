import { useState, useEffect } from 'react';

// Define TypeScript interfaces
interface Timetable {
    id: string;
    title: string;
    faculty: string;
    status: 'active' | 'draft' | 'archived';
    createdAt: Date;
}

interface FilterState {
    dateRange: [Date | null, Date | null];
    status: string;
    faculty: string;
}

const Timetable = () => {
    // State management
    const [timetables, setTimetables] = useState<Timetable[]>([]);
    const [filters, setFilters] = useState<FilterState>({
        dateRange: [null, null],
        status: 'all',
        faculty: 'all',
    });
    const [page, setPage] = useState(1);

    // Placeholder data fetch
    useEffect(() => {
        // Replace with actual API call
        const fetchTimetables = async () => {
            // Simulate API call with mock data
            const mockData: Timetable[] = [
                {
                    id: '1',
                    title: 'Sample Timetable',
                    faculty: 'engineering',
                    status: 'active',
                    createdAt: new Date()
                }
            ];
            setTimetables(mockData);
        };
        fetchTimetables();
    }, [filters, page]);

    const TimetableCard = ({ timetable }: { timetable: Timetable }) => (
        <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold">{timetable.title}</h3>
            <p className="text-gray-600">{timetable.faculty}</p>
            <span className={`px-2 py-1 rounded-full text-sm ${
                timetable.status === 'active' ? 'bg-green-100 text-green-800' :
                timetable.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
            }`}>
                {timetable.status}
            </span>
        </div>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Header with filters */}
            <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
                <h1 className="text-2xl font-bold">Timetables</h1>
                
                <div className="flex flex-wrap gap-4">
                    <select
                        className="border rounded-md px-3 py-2"
                        value={filters.status}
                        onChange={(e) => setFilters({...filters, status: e.target.value})}
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="draft">Draft</option>
                        <option value="archived">Archived</option>
                    </select>

                    <select
                        className="border rounded-md px-3 py-2"
                        value={filters.faculty}
                        onChange={(e) => setFilters({...filters, faculty: e.target.value})}
                    >
                        <option value="all">All Faculties</option>
                        <option value="engineering">Engineering</option>
                        <option value="science">Science</option>
                        <option value="arts">Arts</option>
                    </select>
                </div>
            </div>

            {/* Timetable Grid/List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {timetables.map((timetable) => (
                    <TimetableCard key={timetable.id} timetable={timetable} />
                ))}
            </div>

            {/* Floating Action Button */}
            <button
                className="fixed bottom-8 right-8 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
                onClick={() => {/* Handle new timetable creation */}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
                <button
                    className="px-4 py-2 border rounded-md mr-2 disabled:opacity-50"
                    disabled={page === 1}
                    onClick={() => setPage(page - 1)}
                >
                    Previous
                </button>
                <button
                    className="px-4 py-2 border rounded-md disabled:opacity-50"
                    onClick={() => setPage(page + 1)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Timetable;