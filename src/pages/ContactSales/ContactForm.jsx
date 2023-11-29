import { useState } from "react";
import Section from "../../components/section/Section";
import axios from "axios";
import { BASE_URL } from "../../constants/Base-urls";

const ContactForm = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    title: "",
    companyName: "",
    companySize: "",
    country: "",
    phoneNumber: "",
    message: "",
    consent: "yes",
    consent2: "yes",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const sendForm = async () => {
    setLoading(true);
    const response = await axios.post(
      `${BASE_URL}/api/v1/contact-form`,
      formState
    );
    if (response.data.message === "success") {
      setFormState((state) => ({
        ...state,
        firstName: "",
        lastName: "",
        businessEmail: "",
        title: "",
        companyName: "",
        companySize: "",
        country: "",
        phoneNumber: "",
        message: "",
        consent: "",
        consent2: "",
      }));
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center py-12">
      <Section>
        <div className="flex flex-col-reverse xl:flex-row justify-between sm:items-center xl:items-start">
          <div>
            <h3 className="text-[#363F44] text-[46px] font-bold">
              Contact Sales
            </h3>
            {/* <p className="text-[#54626A] text-lg xl:w-[345.56px]">
              This form is for demo requests only. Please visit the following
              page to request customer support.
            </p> */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendForm();
              }}
              className="space-y-4 mt-3 w-full max-w-[400px]"
            >
              <input
                name="firstName"
                value={formState.firstName}
                onChange={handleChange}
                type="text"
                className="w-full py-3 px-4 bg-white rounded-[4px] text-[#54626A] text-base border border-[#bfbbbb] shadow-md"
                placeholder="First Name *"
              />
              <input
                name="lastName"
                value={formState.lastName}
                type="text"
                onChange={handleChange}
                className="w-full py-3 px-4 bg-white rounded-[4px] text-[#54626A] text-base border border-[#bfbbbb] shadow-md"
                placeholder="Last Name *"
              />
              <input
                name="businessEmail"
                value={formState.businessEmail}
                type="text"
                onChange={handleChange}
                className="w-full py-3 px-4 bg-white rounded-[4px] text-[#54626A] text-base border border-[#bfbbbb] shadow-md"
                placeholder="Business Email *"
              />
              <input
                name="title"
                value={formState.title}
                type="text"
                onChange={handleChange}
                className="w-full py-3 px-4 bg-white rounded-[4px] text-[#54626A] text-base border border-[#bfbbbb] shadow-md"
                placeholder="Title *"
              />
              <input
                name="companyName"
                value={formState.companyName}
                type="text"
                onChange={handleChange}
                className="w-full py-3 px-4 bg-white rounded-[4px] text-[#54626A] text-base border border-[#bfbbbb] shadow-md"
                placeholder="Company Name *"
              />
              <input
                name="companySize"
                value={formState.companySize}
                type="text"
                onChange={handleChange}
                className="w-full py-3 px-4 bg-white rounded-[4px] text-[#54626A] text-base border border-[#bfbbbb] shadow-md"
                placeholder="Company Size *"
              />
              <input
                name="country"
                value={formState.country}
                type="text"
                onChange={handleChange}
                className="w-full py-3 px-4 bg-white rounded-[4px] text-[#54626A] text-base border border-[#bfbbbb] shadow-md"
                placeholder="Enter Country *"
              />
              <input
                name="phoneNumber"
                value={formState.phoneNumber}
                type="tel"
                onChange={handleChange}
                className="w-full py-3 px-4 bg-white rounded-[4px] text-[#54626A] text-base border border-[#bfbbbb] shadow-md"
                placeholder="Phone Number *"
              />
              <textarea
                name="message"
                value={formState.message}
                rows={5}
                onChange={handleChange}
                className="w-full py-3 px-4 bg-white rounded-[4px] text-[#54626A] text-base border border-[#bfbbbb] shadow-md"
              ></textarea>
              <p className="text-[#54626A] text-sm">
                Bragtech would like to use your information above to provide you
                with the latest offers, promotions, and news regarding Bragtech
                products and services. You can unsubscribe at any time. See
                Bragtech's Online Privacy Statement for more information.
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="consent"
                  id="consent"
                  value={formState.consent}
                  onChange={(e) => {
                    const { checked } = e.target;
                    if (checked) {
                      setFormState((state) => ({
                        ...state,
                        consent: e.target.value,
                      }));
                    }
                  }}
                  className="bg-white rounded-[4px] border border-[#bfbbbb]"
                />
                <label htmlFor="consent" className="text-[#54626A] text-sm">
                  Yes, I would like to be contacted by email.
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="consent2"
                  id="check2"
                  value={formState.consent2}
                  onChange={(e) => {
                    const { checked } = e.target;
                    if (checked) {
                      setFormState((state) => ({
                        ...state,
                        consent2: e.target.value,
                      }));
                    }
                  }}
                  className="bg-white rounded-[4px] border border-[#bfbbbb]"
                />
                <label htmlFor="check2" className="text-[#54626A] text-sm">
                  I am an MSP, IT Provider or Reseller.
                </label>
              </div>
              <button
                disabled={loading}
                className=" py-3 px-9 bg-[#FF4500] shadow-md rounded-[4px] text-center text-white text-base"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
          <div className="max-w-[557px] max-h-[506.24px]">
            <img
              src="/images/contactImg.png"
              className="w-full p-0"
              alt="a lady"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactForm;
