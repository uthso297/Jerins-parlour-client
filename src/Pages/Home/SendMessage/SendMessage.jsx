


const SendMessage = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const lastName = form.lastname.value
        const email = form.email.value
        const number = form.phone.value
        const message = form.message.value
        console.log(name, lastName, email, number, message);
        form.reset()
    }

    return (
        <div className="pt-20 pb-10 space-y-10">
            <h1 className="text-center font-bold text-2xl">
                Let us handle your <br /> project, professionally
            </h1>
            <form onSubmit={handleSubmit} action="" className='max-w-3xl mx-auto space-y-5'>
                <div className='flex items-center gap-5'>
                    <input className='p-4 rounded-lg w-full' type="text" name="name" id="" placeholder='Full Name' />
                    <input className='p-4 rounded-lg w-full' type="text" name="lastname" id="" placeholder='Last Name' />
                </div>
                <div className='flex items-center gap-5'>
                    <input className='p-4 rounded-lg w-full' type="email" name="email" id="" placeholder='Email Address' />
                    <input className='p-4 rounded-lg w-full' type="number" name="phone" id="" placeholder='Phone Number' />
                </div>
                <div>
                    <textarea className='w-full p-4 rounded-lg h-[200px]' name="message" id="" placeholder='Your Message'></textarea>
                </div>

                <div className="flex items-center justify-center">
                    <button type='submit' className="px-11 py-3 bg-[#F63E7B] rounded-lg text-white mx-auto hover:bg-[#cb396a]">
                        Send Message
                    </button>
                </div>
            </form>

        </div>
    );
};

export default SendMessage;