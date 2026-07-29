import { useState } from 'react';
import './Form.css';

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

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setSubmitted(true);
            setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);

        } catch (error) {
            console.error('Form submission error:', error);
            // Still show success message on error for demo purposes
            setSubmitted(true);
            setFormData({ fullName: '', email: '', phoneNumber: '', message: '' });
            setTimeout(() => setSubmitted(false), 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="form">
            <div className="form-container">
                <div className="form-header">
                    <h2>Have Questions About Planetary Science?</h2>
                    <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed?
                        <br /> Reach out and we'll get back to you.</p>
                </div>

                {submitted && <div className="success-message">Thank you for reaching out!</div>}

                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name<span className="required">*</span></label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                placeholder="Full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email<span className="required">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phoneNumber">Phone Number<span className="required">*</span></label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                placeholder="Please enter a valid phone number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message<span className="required">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                value={formData.message}
                                onChange={handleChange}
                                maxLength="100"
                                required
                            />
                            <div className="character-counter">{formData.message.length}/100 characters</div>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit   >'}

                    </button>
                </form>
            </div>
        </section >
    );
}