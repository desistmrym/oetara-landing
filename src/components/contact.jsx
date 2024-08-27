import { useEffect, useState } from "react";
import vid_about from "../assets/video/about.mp4";
import axios from "axios";
import { apiUrl } from "../etc/helper";

const Contact = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [showAlert, setShowAlert] = useState(false)

  const getContact = () => {
    const api =
      apiUrl +
      "information?acf_format=standard&_fields=id,modified,slug,status,title,acf";
    axios
      .get(api)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleValidate = () => {
    // const isValidEmail = 
    let formValid = true;
    let errors = {};
    let error_message = '* This field is required';

    if (name === "") {
        formValid = false
        errors['name'] = error_message
    }

    if (email === "") {
        formValid = false
        errors['email'] = error_message
    }

    if (subject === "") {
        formValid = false
        errors['subject'] = error_message
    }

    if (message === "") {
        formValid = false
        errors['message'] = error_message
    }

    setErrors(errors)

    return formValid

  }

  const handleClear = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  const handleSend = (e) => {
    if (handleValidate()) {
        e.preventDefault();
        let api = 'https://cms.oetara.co.id/wp-json/contact-form-7/v1/contact-forms/85/feedback';
        let bodyForm = new FormData();
        bodyForm.append('your-name', name);
        bodyForm.append('your-email', email);
        bodyForm.append('your-subject', subject);
        bodyForm.append('your-message', message);
        bodyForm.append('_wpcf7_unit_tag', 'wpcf7-f123-p456-o1')
    
        axios.post(api, bodyForm)
        .then(res => {
            setShowAlert(true)
            handleClear()
            setSuccess(res.data.message)
            setTimeout(() => {
                setShowAlert(false);
            }, 15000);
        })
        .catch(err => {
            console.log('error', err)
        })
    } else {
        handleValidate()
    }
  }

  useEffect(() => {
    getContact();
  }, []);
  return (
    <div className="px-5 md:px-[3em] py-[3em] pt-[3em] mb-[2em] overflow-scroll scroll-bar h-[100vh]">
      <video
        preload="true"
        muted
        autoPlay
        loop
        className="w-[100%] object-cover h-[70vh]"
        src={vid_about}
        type="video/mp4"
      />
      <div
        className="relative h-[70vh] w-[100%] z-[99] -mt-[70vh]"
        style={{ background: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="flex justify-start items-center h-[100%] px-12">
          <div className="text-white text-[2em] lg:text-[10em]">CONTACT.</div>
        </div>
      </div>

      {"acf" in data && (
        <div className="my-[1em] md:my-[5em] grid grid-cols-1 md:grid-cols-3 gap-[1em] lg:px-[2em]">
          <div>
            <div className="text-left text-[2.5em] lg:text-[4em] py-1 md:py-3">ADDRESS</div>
            <div className="py-1 md:py-3 font-['montserrat-regular'] text-[1em] md:text-[1.5em]">
              {data.acf.address}
            </div>
          </div>
          <div>
            <div className="text-left text-[2.5em] lg:text-[4em] py-1 md:py-3">
              CONTACT US
            </div>
            <div className="py-1 md:py-3 text-[1em] md:text-[1.5em] font-['montserrat-regular']">
              {data.acf.email}
            </div>
            <div className="pt-2 md:pt-10">
              <div className="grid grid-cols-6 md:grid-cols-12 gap-3">
                {"socials" in data.acf &&
                  data.acf.socials.map((item, x) => (
                    <a
                      href={item.url}
                      className="text-black hover:text-black hover:scale-[1.2] transition ease-in-out"
                      target="_blank"
                    >
                      <i className={`dashicons ${item.icon} text-[2em]`}></i>
                    </a>
                  ))}
              </div>
            </div>
          </div>
          <div>
            <div dangerouslySetInnerHTML={{__html: data.acf.embed_url}}></div>
          </div>
        </div>
      )}

      <div className="bg-black px-5 md:px-10 py-8 md:py-16 text-white">
        <div className="text-[3.5em] lg:text-[6em]">WE ARE READY.</div>
        <div className="pt-[1em] md:pt-[5em] grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-3">
          <div class="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="text"
              class="pt-6 md:pt-12 text-[1.5em] lg:text-[2.5em] peer block min-h-[auto] w-full rounded border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-transparent dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput50"
              aria-label="readonly input example"
              value={name}
              onChange={(e) => {setName(e.target.value); setErrors({...errors, name: ''})}}
            />
            <p className={`mt-1 text-left text-xl md:text-2xl text-red-600 ${"name" in errors && errors.name !== "" ? 'animate-shake' : null}`}>{"name" in errors && errors.name !== "" ? errors.name : null}</p>
            <label
              for="exampleFormControlInput50"
              class="text-[1.5em] md:text-[2em] lg:text-[3em] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.1rem] lg:peer-focus:-translate-y-[.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              NAME
            </label>
          </div>
          <div class="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="email"
              class="pt-6 md:pt-12 text-[1.5em] lg:text-[2.5em] peer block min-h-[auto] w-full rounded border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-transparent dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput50"
              aria-label="readonly input example"
              value={email}
              onChange={(e) => {setEmail(e.target.value); setErrors({...errors, email: ''})}}
            />
            <p className={`mt-1 text-left text-xl md:text-2xl text-red-600 ${"email" in errors && errors.email !== "" ? 'animate-shake' : null}`}>{"email" in errors && errors.email !== "" ? errors.email : null}</p>
            <label
              for="exampleFormControlInput50"
              class="text-[1.5em] lg:text-[2.5em] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.1rem] lg:peer-focus:-translate-y-[.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              EMAIL
            </label>
          </div>
          <div class="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="text"
              class="pt-6 md:pt-12 text-[1.5em] lg:text-[2.5em] peer block min-h-[auto] w-full rounded border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-transparent dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput50"
              aria-label="readonly input example"
              value={subject}
              onChange={(e) => {setSubject(e.target.value); setErrors({...errors, subject: ''})}}
            />
            <p className={`mt-1 text-left text-xl md:text-2xl text-red-600 ${"subject" in errors && errors.subject !== "" ? 'animate-shake' : null}`}>{"subject" in errors && errors.subject !== "" ? errors.subject : null}</p>
            <label
              for="exampleFormControlInput50"
              class="text-[1.5em] lg:text-[2.5em] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.1rem] lg:peer-focus:-translate-y-[.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              SUBJECT
            </label>
          </div>
        </div>
        <div className="py-1 md:py-8">
          <div class="relative mb-3" data-twe-input-wrapper-init>
            <textarea
              type="text"
              className="pt-6 md:pt-12 text-[1.5em] lg:text-[2.5em] peer block min-h-[auto] w-full rounded border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-transparent dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput50"
              aria-label="readonly input example"
              value={message}
              onChange={(e) => {setMessage(e.target.value); setErrors({...errors, message: ''})}}
            ></textarea>
            <p className={`mt-1 text-left text-xl md:text-2xl text-red-600 ${"message" in errors && errors.message !== "" ? 'animate-shake' : null}`}>{"message" in errors && errors.message !== "" ? errors.message : null}</p>
            <label
              for="exampleFormControlInput50"
              class="text-[1.5em] lg:text-[2.5em] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.1rem] lg:peer-focus:-translate-y-[.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem]  motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
            >
              MESSAGE
            </label>
          </div>
        </div>
        {showAlert ? 
            <p className="text-white pb-5 text-2xl md:text-[2em] animate-fade-out-down">{success}</p>
        : <div></div>}
        <div className="py-1">
            <button className="border px-10 py-2 text-[1.5em] md:text-[2em] hover:bg-white hover:text-black" onClick={(e) => handleSend(e)}>SEND IT</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
