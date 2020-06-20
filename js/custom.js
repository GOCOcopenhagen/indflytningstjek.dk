

var stripe = Stripe("pk_live_bqlS9vOJGNSFVKQylA2f1T6200luIfgnzZ");

$(() => {

    $("#wf-form-Contact-Form").submit((e) => {
        const data = $("#wf-form-Contact-Form").serializeArray()
        alert("Beskeden er blevet sendt")
        $("#wf-form-Contact-Form")[0].reset()
        fetch("https://us-central1-goco-services.cloudfunctions.net/formendpoint", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: "info@indflytningstjek.dk",
                from: data[2].value,
                subject: "Ny besked fra inflytnigstjek.dk",
                text: `Navn:"${data[0].value} ${data[1].value}", Tlf:"${data[3].value}".
                 Besked: ${data[4].value}`
            })
        }).then((d) => d.json()).then((r) => {

        })
        e.preventDefault()
    })

    $("#order-1").click(() => {
        stripe.redirectToCheckout({
            lineItems: [{ price: 'price_HNvYKXILiQzGlS', quantity: 1 }],
            mode: 'payment',
            billingAddressCollection: 'required',
            successUrl: 'https://indflytningstjek.dk/shop-success.html',
            cancelUrl: 'https://indflytningstjek.dk/shop.html',
        })
            .then(function (result) {
                if (result.error) {
                    alert(result.error.message)
                }
            });
    })

    $("#order-2").click(() => {
        stripe.redirectToCheckout({
            lineItems: [{ price: 'price_HNvZdKCprsBOdt', quantity: 1 }],
            billingAddressCollection: 'required',
            mode: 'payment',
            successUrl: 'https://indflytningstjek.dk/shop-success.html',
            cancelUrl: 'https://indflytningstjek.dk/shop.html',
        })
            .then(function (result) {
                if (result.error) {
                    alert(result.error.message)
                }
            });
    })

    $("#order-3").click(() => {
        stripe.redirectToCheckout({
            lineItems: [{ price: 'price_HNvZbiqzRy03Le', quantity: 1 }],
            billingAddressCollection: 'required',
            mode: 'payment',
            successUrl: 'https://indflytningstjek.dk/shop-success.html',
            cancelUrl: 'https://indflytningstjek.dk/shop.html',
        })
            .then(function (result) {
                if (result.error) {
                    alert(result.error.message)
                }
            });
    })


    //plan_HJV6CkXr977znw
    //price_HNvbWjKnYFYIck
    $("#order-4").click(() => {
        stripe.redirectToCheckout({
            lineItems: [{ price: 'price_HNvbWjKnYFYIck', quantity: 1 }],
            billingAddressCollection: 'required',
            mode: 'payment',
            successUrl: 'https://indflytningstjek.dk/shop-success.html',
            cancelUrl: 'https://indflytningstjek.dk/shop.html',
        })
            .then(function (result) {
                if (result.error) {
                    alert(result.error.message)
                }
            });
    })



})