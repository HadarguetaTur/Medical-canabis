import Image from 'next/image';
import FormImage from '../../public/hero02.jpeg'; // Corrected import statement
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
                <Image src={FormImage} alt="form" layout="fill" objectFit="cover" className="opacity-20" />
            </div>
            {/* Rest of the code */}
        </section>
    );
}
