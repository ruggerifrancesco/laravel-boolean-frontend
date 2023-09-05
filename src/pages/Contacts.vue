<template>
    <div class="contact-information-navbar">

        <!-- Contact Information Section -->

        <!-- Title -->
        <h2>Contact Information</h2>

        <!-- Navbar Buttons -->
        <nav>
            <ul>
                <div v-for="element in elements" class="contact-nav-button">
                    <li>
                        <a :href="element.link">{{ element.name }}</a>
                    </li>
                </div>
            </ul>
        </nav>

        <div class="side right-side">
            <div class="picture-wrapper">

            </div>
        </div>
    </div>

    <!-- Contact Form on Website -->
    <div class="contact-form">
        <div class="">
            <h2>Contact us directly on the website! </h2>
        </div>

        <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12">
                <div class="wrapper">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 mb-5">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="dbox w-100 text-center">
                                        <div class="icon d-flex align-items-center justify-content-center">
                                            <span class="fa fa-map-marker"></span>
                                        </div>
                                        <div class="text">
                                            <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="dbox w-100 text-center">
                                        <div class="icon d-flex align-items-center justify-content-center">
                                            <span class="fa fa-phone"></span>
                                        </div>
                                        <div class="text">
                                            <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="dbox w-100 text-center">
                                        <div class="icon d-flex align-items-center justify-content-center">
                                            <span class="fa fa-paper-plane"></span>
                                        </div>
                                        <div class="text">
                                            <p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="contact-wrap">
                                <h3 class="mb-4 text-center">Get in touch with us</h3>
                                <div id="form-message-warning" class="mb-4 w-100 text-center"></div>
                                <div id="form-message-success" class="mb-4 w-100 text-center">
                                    Your message was sent, thank you!
                                </div>
                                <form method="POST" id="contactForm" name="contactForm" class="contactForm">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="name" id="name"
                                                    placeholder="Name">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="email" class="form-control" name="email" id="email"
                                                    placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="subject" id="subject"
                                                    placeholder="Subject">
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea name="message" class="form-control" id="message" cols="30"
                                                    rows="8" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="submit" value="Send Message" class="btn btn-primary">
                                                <div class="submitting"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Sign Up to Newsletter -->
    <div class="newsletter-sign-up-container">
        <h1>Subscribe to our newsletter to stay updated on the latest cocktails!</h1>
        <form class="newsletter">
            <span class="container active">
                <label for="name">What's your name?</label>
                <input type="text" id="name" name="name" class="required" />
                <span class="next" title="next"></span>
            </span>
            <span class="container">
                <label for="email">What's your email?</label>
                <input class="required" type="email" id="email" name="email" />
            </span>
            <span class="submit" title="Subscribe"></span>
        </form>

        <div class="reset">Reset the Form</div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            elements,
        };
    },
};

const elements = [
    {
        name: "Contact",
        link: "/contact",
    },
    {
        name: "FAQ",
        link: "/faq",
    },
    {
        name: "Shipping",
        link: "/shipping",
    },
    {
        name: "Returns",
        link: "/returns",
    },
    {
        name: "Cookies",
        link: "/cookies",
    },
    {
        name: "Terms",
        link: "/terms",
    },
    {
        name: "Privacy",
        link: "/privacy",
    },

]
</script>

<style lang="scss">
*,
*:before,
*:after {
    box-sizing: border-box;
    transition: .5s ease-in-out;
}

body,
html {
    font-family: -apple-system, helvetica neue, helvetica, arial, sans-serif;
    font-weight: 200;
    position: relative;
    height: 100%;
}

h1 {
    font-size: 30px;
    line-height: 30px;
    font-weight: 200;
    padding: 75px 0 50px 0;
    text-align: center;

    .subtext {
        opacity: .3;
    }
}

.newsletter {
    max-width: 400px;
    margin: 50px auto;
    position: relative;

    >span.container {
        display: block;
        width: 100%;
        position: absolute;
        z-index: 1;
        top: 0px;
        left: 0px;
        padding: 20px 10px 10px 10px;
        opacity: 0;

        &.active {
            opacity: 1;
            z-index: 2;

            &+.submit {
                z-index: 3;
                top: 20px;
                opacity: 1;
            }
        }

        >label {
            display: block;
            position: absolute;
            top: -5px;
            line-height: 18px;

            &.fadeOut {
                opacity: 0;
                top: 10px;
            }
        }

        >input {
            padding: 15px;
            margin: 0;
            width: 100%;
            outline: none;
            border: 1px solid #d1d1d1;
            border-radius: 3px;
            font-family: -apple-system, helvetica neue, helvetica, arial, sans-serif;
            font-weight: 200;
            font-size: 18px;
            line-height: 18px;
        }

        .next {
            display: block;
            position: absolute;
            height: 53px;
            width: 53px;
            top: 20px;
            right: 10px;
            text-align: center;
            border-radius: 0 3px 3px 0;
            border-top: 1px solid transparent;
            border-right: 1px solid transparent;
            border-bottom: 1px solid transparent;

            &:hover {
                color: #22a31b;
                cursor: pointer;

                &:before {
                    color: #22a31b;
                }
            }

            &:before {
                content: '\f061';
                font-family: FontAwesome;
                font-size: 18px;
                font-weight: 200;
                line-height: 51px;
                color: #b6b6b6;
            }
        }

        span.error {
            color: red;
            position: absolute;
            display: block;
            width: 100%;
            font-size: 12px;
            line-height: 12px;
            bottom: -10px;
        }
    }

    >span.submit {
        display: block;
        position: absolute;
        height: 53px;
        width: 53px;
        top: 20px;
        right: 10px;
        text-align: center;
        opacity: 0;
        border-radius: 0 3px 3px 0;
        border-top: 1px solid transparent;
        border-right: 1px solid transparent;
        border-bottom: 1px solid transparent;
        overflow: hidden;
        background: #b6b6b6;

        &:hover {
            background: #22a31b;
            border-top: 1px solid #158010;
            border-right: 1px solid #158010;
            border-bottom: 1px solid #158010;
            cursor: pointer;

            &:before {
                color: white;
            }
        }

        &:before {
            content: '\f1d8';
            font-family: FontAwesome;
            font-size: 18px;
            font-weight: 200;
            line-height: 51px;
            color: white;
        }

        &:after {
            content: "You're subscribed!";
            display: block;
            color: white;
            font-weight: 400;
            text-shadow: 1px 1px 0 rgba(0, 0, 0, .3);
            height: 100%;
            width: 100%;
            line-height: 51px;
            position: absolute;
            top: 10px;
            opacity: 0;
        }

        &.submitted {
            transition: .75s cubic-bezier(0.19, 1, 0.22, 1);
            width: calc(100% - 20px);
            background: #22a31b;
            border: 1px solid #158010;
            cursor: pointer;
            border-radius: 3px;

            &:before {
                color: white;
                position: relative;
                top: -50px;
                right: -100px;
                transition: .25s .75s ease-in-out;
            }

            &:after {
                top: 0;
                opacity: 1;
                color: white;
                transition: .5s 1s ease-in-out;
            }
        }
    }
}

.reset {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 25px;
    cursor: pointer;
    color: #747474;

    &:hover {
        color: red;
    }
}
</style>