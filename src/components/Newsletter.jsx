import toast from "react-hot-toast";
import SectionTitle from "./Shared/SectionTitle";

const Newsletter = () => {

    const handleNewsletter = (e) => {
        e.preventDefault();

        toast('📰 Subscribed to Newsletter', {
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            }
        });

        e.target.reset();
    }

    return (
        <section className="mx-4">
            <SectionTitle
                title="Get your design right, right now"
                subTitle="Be the first know our latest offers and updates!"
            />
            {/* Newsletter Email Input Field */}
            <div className="flex items-center justify-center">
                <form onSubmit={handleNewsletter} className="relative w-full lg:w-2/5 newsletter">
                    <input required
                        type="email"
                        className="w-full outline-none border border-transparent focus:border-[#f1f6f4] px-6 py-4 rounded-md transition-all duration-500"
                        placeholder="Enter your email address" />
                    <button
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-athenaBG px-4 py-2 rounded-md text-white hover:scale-105 transition-all duration-500">Get Started</button>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;