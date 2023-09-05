<template>
    <div class="contact-information-navbar">

        <!-- Contact Information Section -->

        <!-- Title -->
        <h2>Contact Information</h2>

        <!-- Navbar Buttons -->
        <nav>
            <ul>
                <div v-for="navElement in navElements" class="contact-nav-button">
                    <li>
                        <a :href="contact.link">{{ contact.name }}</a>
                    </li>
                </div>
            </ul>
        </nav>

        <!-- Get In Touch Section -->
        <div class="whole-rectangle">
            <div class="side left-side">
                <div class="text-area">
                    <h2>Let's get in touch!</h2>

                    <div class="text-square">
                        <h4 class="title-get-in-touch">Physical Store:</h4>
                        <p><i class="fa-solid fa-location-dot"></i> 1885 Marcus Street, Scottsboro, AL 35768, United States
                        </p>
                        <p><i class="fa-solid fa-phone"></i> +1 256-999-1335 to schedule a pick-up time for your orders!</p>
                    </div>

                    <div class="text-square">
                        <h4>Support/Invoice/Contact</h4>
                        <p>contact@cocktailclub.com</p>
                    </div>
                </div>
            </div>

            <div class="side right-side">
                <div class="picture-wrapper">

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

    </div>
</template>

<script>
export default {
}

const navElements = [
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

$('.next').click(function () {
    var nextTarget = $(this).parent().siblings('span');
    var currentTarget = $(this).parent();
    currentTarget.removeClass('active');
    nextTarget.addClass('active').find('input').focus();
});

$('input#email').on('keydown', function (e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 13) {
        $('.submit').trigger('click');
    }
})

$('.submit').click(function () {
    var target = $(this);
    var lastInputContainerLabel = target.parent().find('.container.active label');
    target.addClass('submitted');
    lastInputContainerLabel.addClass('fadeOut');
})



// capture tab press
$(".container").on('keydown', 'input', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode == 9) {
        e.preventDefault();
        //tabbing backwards
        if (e.shiftKey) {
            var currentInput = $(this);
            var prevInput = currentInput.parent().prev('.container').find('input');
            var currentContainer = currentInput.parent();
            var prevContainer = currentInput.parent().prev('.container');
            if (currentContainer.is(':first-of-type')) {
                // do nothing if is first input
            } else {
                currentContainer.removeClass('active');
                prevContainer.addClass('active');
                prevInput.focus();
            }
            //tabbing forwards
        } else {
            var currentInput = $(this);
            var nextInput = currentInput.parent().next('.container').find('input');
            var currentContainer = currentInput.parent();
            var nextContainer = currentInput.parent().next('.container');
            if (currentContainer.is(':nth-last-of-type(2)')) {
                // do nothing if is last input
            } else {
                currentContainer.removeClass('active');
                nextContainer.addClass('active');
                nextInput.focus();
            }
        }
    }
});

// validate the form
$('.newsletter').validate({
    errorElement: "span"
});


// reset the form
$('.reset').click(function () {
    var target = $('form.newsletter');
    var targetInput = target.find('span.container > input');
    var inputContainer = target.find('span');
    var firstContainer = target.find('span.container:first-of-type');
    targetInput.val('');
    inputContainer.removeClass('active');
    firstContainer.addClass('active');
    $('span.submit').removeClass('submitted');
    $('label').removeClass('fadeOut')
});
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