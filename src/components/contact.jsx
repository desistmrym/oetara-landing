import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../etc/helper";
import Loader from "./loader";
import HeaderLogo from "./headerLogo";
import { cover_email } from "../etc/images";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref: addressRef, inView: addressInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { ref: mapRef, inView: mapInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [showAlert, setShowAlert] = useState(false)
  const [showLoad, setShowLoad] = useState(false)

  const getContact = () => {
    setShowLoad(true)
    const api =
      apiUrl +
      "information?acf_format=standard&_fields=id,modified,slug,status,title,acf";
    axios
      .get(api)
      .then((res) => {
        setData(res.data[0]);
        setShowLoad(false)
      })
      .catch((err) => {
        setShowLoad(false)
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
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
      {!showLoad ? 
        <div className="pt-5 lg:pt-4 bg-black text-white">
          <HeaderLogo />

            <div className='mt-3 bg-email' style={{backgroundImage: `url(${cover_email})`}}>
              <div className="relative" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                <div className="px-[1em] md:px-[2em] lg:px-[5em] pb-[25em]">
                  <div className='font-["oswald-medium"] text-[1.5em] md:text-[4em] pt-[5.5em] md:pt-[3em] pr-[1.5em] md:pr-[3em]'> 
                      <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.8 }}
                      >
                        We are Navigators not only crafting the right message but also setting the measurable goals and will be  your guidance through Digital World Crowdedness.
                      </motion.div>
                      <motion.div 
                          initial={{ width: '0%' }}
                          animate={{ width: '100%', transition: { duration: 1.5, delay: .5 } }}
                      >
                        <div className='border-t-[.2em] border-t-[#AA2E2C] w-[35%]'></div>
                      </motion.div>
                  </div>
                </div>
              </div>
            </div>

          {"acf" in data && (
            <div className="my-[1em] md:my-[5em] grid grid-cols-1 lg:grid-cols-2 gap-[2em] md:px-[2em] px-[1em] lg:px-[5em]">
              <div className="grid grid-cols-2 gap-[1em]">
                <div>
                  <motion.div
                    ref={addressRef}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: addressInView ? 1 : 0, y: addressInView ? 0 : -50 }}
                    transition={{ duration: 0.8 }}
                    className="text-left text-[2.5em] lg:text-[3.5em] py-1 md:py-3 shadow-white"
                  >
                    Address
                  </motion.div>
                  <motion.div 
                    ref={addressRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: addressInView ? 1 : 0, y: addressInView ? 0 : 50 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="py-1 md:py-3 font-['oswald'] text-[1em] md:text-[1.5em]"
                  >
                    {data.acf.address}
                  </motion.div>
                </div>
                <div>
                  <motion.div 
                    ref={addressRef}
                    intial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: addressInView ? 1 : 0, y: addressInView ? 0 : -50 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-left text-[2.5em] lg:text-[3.5em] py-1 md:py-3 shadow-white"
                  >
                    Contact
                  </motion.div>
                  <motion.div 
                    ref={addressRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: addressInView ? 1 : 0, y: addressInView ? 0 : 50 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="py-1 md:py-3 text-[1em] md:text-[1.5em] font-['oswald']"
                  >
                    {data.acf.email}
                  </motion.div>
                  <div className="pt-2 md:pt-10">
                    <div className="grid grid-cols-3">
                      {"socials" in data.acf &&
                        data.acf.socials.map((item, x) => {
                          let ico = '';
                          let dsply = '';

                          if (item.icon.indexOf('dashicon') > -1) {
                            ico =  <i className={`dashicons ${item.icon} text-[2em] md:text-[5em]`}></i>
                          } else {
                            ico = <img src={item.icon} alt="" className="w-[1.5em] md:w-[4.5em] object-contain" /> 
                            dsply = 'flex'
                          }
                          return (
                          <motion.a
                            ref={addressRef}
                            initial={{ opacity: 0, scale: 1.5 }}
                            animate={{ opacity: addressInView ? 1 : 0, scale: addressInView ? 1 : 1.5 }}
                            transition={{ duration: 0.8, delay: 1.2 + x * 0.2 }}
                            href={item.url}
                            className={`text-white cursor-hover hover:scale-[0.8] transition ease-in-out hover:text-white ${dsply}`}
                            target="_blank"
                            key={x}
                          >
                            {ico}
                          </motion.a>
                        )})}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <motion.div 
                  ref={mapRef}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: mapInView ? 1 : 0, scale: mapInView ? 1 : 0 }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  dangerouslySetInnerHTML={{__html: data.acf.embed_url}}>
                </motion.div>
              </div>
            </div>
          )}

          <div className="bg-black px-5 md:px-10 lg:px-[5em] py-8 md:py-16 text-white">
            <div className="text-[2.5em] lg:text-[3.5em]">
              <motion.span
                ref={textRef}
                initial={{ opacity: 0, marginLeft: -50 }}
                animate={{ opacity: textInView ? 1 : 0, marginLeft: textInView ? 0 : -50 }}
                transition={{ duration: 0.8 }}
              >
                Contact
              </motion.span>&nbsp;
              <motion.span
                ref={textRef}
                initial={{ opacity: 0, marginLeft: -50 }}
                animate={{ opacity: textInView ? 1 : 0, marginLeft: textInView ? 0 : -50 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Us
              </motion.span> &nbsp;
              <motion.span
                ref={textRef}
                initial={{ opacity: 0, marginLeft: -50 }}
                animate={{ opacity: textInView ? 1 : 0, marginLeft: textInView ? 0 : -50 }}
                transition={{ duration: 0.8, delay: 0.3 }}>
                &
              </motion.span> &nbsp;
              <motion.span
                ref={textRef}
                initial={{ opacity: 0, marginLeft: -50 }}
                animate={{ opacity: textInView ? 1 : 0, marginLeft: textInView ? 0 : -50 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Let’s
              </motion.span> &nbsp;
              <motion.span
                ref={textRef}
                initial={{ opacity: 0, marginLeft: -50 }}
                animate={{ opacity: textInView ? 1 : 0, marginLeft: textInView ? 0 : -50 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Collaborate!
              </motion.span>
            </div>
            <div className="text-[1.5em] py-4">
              <motion.div
                ref={textRef}
                intial={{ opacity: 0, y: 50 }}
                animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}
                transition={{ duration: 0.8 }}
              >
                Say us a Hello. Get to know each other. Tell us your story. We listen. We tell you our story. You listen. Then you ask simple question. We answer. We ask you back. You answer. And then we getting closer and…
              </motion.div>
              <motion.div 
                ref={textRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="pt-8"
              >
                Oh hey, we haven’t even start the conversation, but it looks like we already miss you. Please drop us a line.
              </motion.div>
            </div>
            <div className="pt-[1em] md:pt-[5em] grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-3">
              <motion.div
                ref={formRef}
                intial={{ opacity: 0, y: 50 }}
                animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
                transition={{ duration: 0.8 }} 
                className="relative mb-3 mt-8 md:mt-0" data-twe-input-wrapper-init
              >
                <input
                  type="text"
                  className="bg-white text-black text-[1.5em] peer block min-h-[auto] w-full  border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-black data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput50"
                  aria-label="readonly input example"
                  value={name}
                  onChange={(e) => {setName(e.target.value); setErrors({...errors, name: ''})}}
                />
                <p className={`mt-1 text-left text-xl md:text-2xl text-red-600 ${"name" in errors && errors.name !== "" ? 'animate-shake' : null}`}>{"name" in errors && errors.name !== "" ? errors.name : null}</p>
                <label
                  for="exampleFormControlInput50"
                  class="text-[1.5em] md:text-[2em] -mt-[2em] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.1rem] lg:peer-focus:-translate-y-[.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white shadow-white dark:peer-focus:text-primary"
                >
                  NAME
                </label>
              </motion.div>
              <motion.div 
                ref={formRef}
                intial={{ opacity: 0, y: 50 }}
                animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="relative mb-3 mt-8 md:mt-12 lg:mt-0" data-twe-input-wrapper-init
              >
                <input
                  type="email"
                  className="bg-white text-black text-[1.5em] peer block min-h-[auto] w-full  border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput50"
                  aria-label="readonly input example"
                  value={email}
                  onChange={(e) => {setEmail(e.target.value); setErrors({...errors, email: ''})}}
                />
                <p className={`mt-1 text-left text-xl md:text-2xl text-red-600 ${"email" in errors && errors.email !== "" ? 'animate-shake' : null}`}>{"email" in errors && errors.email !== "" ? errors.email : null}</p>
                <label
                  for="exampleFormControlInput50"
                  className="text-[1.5em] md:text-[2em] -mt-[2em] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.1rem] lg:peer-focus:-translate-y-[.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white shadow-white dark:peer-focus:text-primary"
                >
                  EMAIL
                </label>
              </motion.div>
              <motion.div 
                ref={formRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="relative mb-3 mt-8 md:mt-12 lg:mt-0" data-twe-input-wrapper-init
              >
                <input
                  type="text"
                  className="bg-white text-black text-[1.5em] peer block min-h-[auto] w-full  border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput50"
                  aria-label="readonly input example"
                  value={subject}
                  onChange={(e) => {setSubject(e.target.value); setErrors({...errors, subject: ''})}}
                />
                <p className={`mt-1 text-left text-xl md:text-2xl text-red-600 ${"subject" in errors && errors.subject !== "" ? 'animate-shake' : null}`}>{"subject" in errors && errors.subject !== "" ? errors.subject : null}</p>
                <label
                  for="exampleFormControlInput50"
                  className="text-[1.5em] md:text-[2em] -mt-[2em] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.1rem] lg:peer-focus:-translate-y-[.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white shadow-white dark:peer-focus:text-primary"
                >
                  SUBJECT
                </label>
              </motion.div>
            </div>
            <div className="py-3 mt-0 md:mt-12">
              <motion.div 
                ref={formRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="relative mb-3 mt-8 md:mt-0" data-twe-input-wrapper-init
              >
                <textarea
                  type="text"
                  className="bg-white text-black h-[30vh] text-[1.5em] peer block min-h-[auto] w-full  border-b-2 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput50"
                  aria-label="readonly input example"
                  value={message}
                  onChange={(e) => {setMessage(e.target.value); setErrors({...errors, message: ''})}}
                ></textarea>
                <p className={`mt-1 text-left text-xl md:text-2xl text-red-600 ${"message" in errors && errors.message !== "" ? 'animate-shake' : null}`}>{"message" in errors && errors.message !== "" ? errors.message : null}</p>
                <label
                  for="exampleFormControlInput50"
                  className="text-[1.5em] md:text-[2em] -mt-[2em] pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.1rem] lg:peer-focus:-translate-y-[.5rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem]  motion-reduce:transition-none dark:text-white shadow-white dark:peer-focus:text-primary"
                >
                  MESSAGE
                </label>
              </motion.div>
            </div>
            {showAlert ? 
                <p className="text-white pb-5 text-2xl md:text-[2em] animate-fade-out-down">{success}</p>
            : <div></div>}
            <div className="py-1">
                <motion.button 
                  ref={formRef}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: formInView ? 1 : 0, y: formInView ? 0 : 50 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="border bg-black text-white px-10 py-2 text-[1.5em] md:text-[2em] hover:bg-white hover:text-black" onClick={(e) => handleSend(e)}
                >
                  SEND IT
                </motion.button>
            </div>
          </div>
        </div>
      :
        <Loader />
      }
    </motion.div>
  );
};

export default Contact;
