import Image from 'next/image';
import FromImage from '../../public/hero02.jpeg';
import { useState } from 'react';


export function Form() {
    const [lead, setLead] = useState({});
    const [submissionStatus, setSubmissionStatus] = useState(null);


    const handleButtonClick = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(lead),
            });

            if (response.ok) {
                setSubmissionStatus('success');
            } else {
                setSubmissionStatus('failure');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmissionStatus('failure');
        }
    };


    const handleInputChange = (e) => {
        setLead((prevLead) => ({
            ...prevLead,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section className="text-center bg-#faf9f8 relative h-2/3 py-16 p-12 " id='form-section'>
            <div className="absolute inset-0">
                <Image src={FromImage} alt="form" layout="fill" objectFit="cover" className="opacity-20" />
            </div>
            <div className="relative h-full flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-green-900 relative hover:text-green-500 hover:scale-105 transition-all">
                    השאירו פרטים
                </h2>
                <form className="mt-8">
                    {/* Form inputs */}
                    <div className="flex flex-col md:flex-row justify-center">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="bg-white py-2 px-4 mb-4 md:mr-4 rounded-lg shadow-lg"
                            onChange={handleInputChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="bg-white py-2 px-4 mb-4 md:mr-4 rounded-lg shadow-lg"
                            onChange={handleInputChange}
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            className="bg-white py-2 px-4 mb-4 md:mr-4 rounded-lg shadow-lg"
                            onChange={handleInputChange}
                        />
                        <button
                            onClick={handleButtonClick}
                            className="bg-green-600 text-white py-2 px-4 mb-4 rounded-lg hover:bg-green-400 hover:text-white"
                        >
                            שלח
                        </button>
                    </div>
                </form>
            </div>
            {submissionStatus === 'success' && (
                <div dir="rtl" className="dialog-success font-bold text-green-700">
                    <h2>הפרטים התקבלו בהצלחה! אצור קשר בהקדם.</h2>
                    
                </div>
            )}
            {submissionStatus === 'failure' && (
                <div dir="rtl" className="dialog-failure font-bold text-red-700">
                    Something did not work well. Can you send again?
                </div>
            )}
        </section>

    );
}

