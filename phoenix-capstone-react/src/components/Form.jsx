import { useState } from 'react';

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const params = new URLSearchParams();
            params.append('fullName', formData.fullName);
            params.append('email', formData.email);
            params.append('phoneNumber', formData.phoneNumber);
            params.append('message', formData.message);

            const response = await fetch('https://whitebricks.com/tsacademy.php', {
                method: 'POST',
                body: params
            });

            if (response.ok) {
                setSubmitted(true);
                setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
                setTimeout(() => setSubmitted(false), 3000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="form">
            <h2>Have Questions About Planetary Science?</h2>
            <p>Reach out and we'll get back to you.</p>

            {submitted && <div style={{ color: 'green', marginBottom: '20px' }}>Thank you for your submission!</div>}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        maxLength="100"
                        required
                    />
                    <p>{formData.message.length}/100 characters</p>
                </div>

                <button type="submit" disabled={loading}>
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </section>
    );
}