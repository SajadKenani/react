import { UserPlus, X, User, Mail, Lock } from "lucide-react"
import { setShowAddForm } from "../../../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import useFetchHandlers from "../../APIs"

export const SHOWADDSTUDENT = () => {
    const dispatch = useDispatch()
    const [newStudent, setNewStudent] = useState<any>({
        name: "",
        email: "",
        password: "",
        grade: "",
    });

    const { HandleStudentInsertion } = useFetchHandlers({ newStudent });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target; // Destructure to get the 'name' and 'value' from the event target

    setNewStudent((prev: any) => ({
        ...prev,          // Spread the previous state
        [name]: value     // Update the specific field (name, email, password, class, etc.)
    }));
};


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all">
                <div className="bg-indigo-600 p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <UserPlus className="text-white" size={20} />
                        <h2 className="text-xl font-semibold text-white mr-2">إضافة طالب جديد</h2>
                    </div>
                    <button
                        onClick={() => dispatch(setShowAddForm(false))}
                        className="text-white hover:bg-indigo-700 rounded-full p-1"
                    >
                        <X size={20} />
                    </button>
                </div>

                <form onSubmit={HandleStudentInsertion} className="p-6 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            اسم الطالب
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={newStudent.name}
                                onChange={handleInputChange}
                                className="pr-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="الاسم الكامل"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            البريد الإلكتروني
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                value={newStudent.email}
                                onChange={handleInputChange}
                                className="pr-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="student@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            كلمة المرور
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={newStudent.password}
                                onChange={handleInputChange}
                                className="pr-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="6 أحرف على الأقل"
                            />
                        </div>
                    </div>


                    {/* Select Grade for the student account */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            الصف الدراسي
                        </label>
                        <div className="relative">
                            <select
                                name="grade"
                                
                                value={newStudent.grade}
                                onChange={handleInputChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            >
                                <option value="" disabled>اختر الصف الدراسي</option>
                                <option value="4"> الصف الرابع الاعدادي</option>
                                <option value="5">الصف الخامس الاعدادي</option>
                                <option value="6">الصف السادس الاعدادي</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                    </div>


                    <div className="flex items-center justify-end space-x-3 pt-3">
                        <button
                            type="button"
                            onClick={() => dispatch(setShowAddForm(false))}
                            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 ml-3"
                        >
                            إلغاء
                        </button>
                        <button
                            type="submit"
                            className={`px-4 py-2 rounded-lg text-white font-medium transition-all flex items-center justify-center

                      bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800
                    `}
                        >

                            <>
                                <UserPlus size={18} className="ml-2" />
                                <span>إضافة طالب</span>
                            </>

                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}