var aws = require("aws-sdk");
var SES = new aws.SES({ region: "ap-southeast-2" });

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    
    const parsedBody = JSON.parse(event.body);

    // Send email to Juan 
    const params = {
        Destination: {
            ToAddresses: ["sernadominguezj@gmail.com"],
        },
        Message: {
            Body: {
                Text: {
                    Data: `The person ${parsedBody.name} with phone number ${parsedBody.phone} and email address ${parsedBody.email} wants to send you the following message: ${parsedBody.message}`
                },
                Html: {
                    Data: `<html><head><title>New request</title><style>*{margin:0; padding:0; box-sizing:border-box;} header{height: 65px; background-color:#1D1D20; color:white; text-align:center; padding-top:13px;} #main{padding-top:20px; padding-bottom: 20px; padding-left:10px; padding-right:10px; background-color:#D3D3D3;} h1{font-size:1.5rem;} footer{height:90px; background-color:#1D1D20; color:white; text-align:center; padding-top:10px; padding-bottom:10px;}</style></head><body><header><h1>New Quote Request</h1></header><div id="main"><h2><strong>Hello Juan,</strong></h2><br/><p>${parsedBody.name} wants to get in touch with you.This person left you the following message: ${parsedBody.message}.</p><br/><p>You can contact this person via phone, calling to ${parsedBody.phone} or send an email to ${parsedBody.email}.</p><br/><p>Best regards,</p><p>Juan Serna Dev.</p></div><footer>Juan Serna Web Developer<br/>Copyright 2023<br/>Contact us: +61 414029043</footer></body></html>`
                }
            },
            Subject: {
                Data: `Message request.`
            },
        },
        Source: "no-reply@juansernad.com"
    };

    // Send email to client/recruiter
    const params2 = {
        Destination: {
            ToAddresses: [`${parsedBody.email}`]
        },
        Message: {
            Body: {
                Text: {
                    Data: `Dear ${parsedBody.name}, thank you for your message. `
                },
                Html: {
                    Data: `<html><head><title>Message confirmation</title><style>*{margin:0; padding:0; box-sizing:border-box;} header{height: 65px; background-color:#1D1D20; color:white; text-align:center; padding-top:13px;} #main{padding-top:20px; padding-bottom: 20px; padding-left:10px; padding-right:10px; background-color:#D3D3D3;} h1{font-size:1.5rem;} footer{height:90px; background-color:#1D1D20; color:white; text-align:center; padding-top:10px; padding-bottom:10px;}</style></head><body><header><h1>Message confirmation</h1></header><div id="main"><h2><strong>Hello ${parsedBody.name},</strong></h2><br/><p>Thanks for your message, I will be in touch soon!.</p><br/><p>Meanwhile, please see your message details: ${parsedBody.message}.</p><br/><p>Best regards,</p><p>Juan Serna Dev.</p></div><footer>Juan Serna Web Developer<br/>Copyright 2023<br/>Contact us: +61 414029043</footer></body></html>`
                }
            },
            Subject: {
                Data: `Message confirmation`
            },
        },
        Source: "no-reply@juansernad.com"
    };

    try {
        const result = await SES.sendEmail(params).promise();
        const result2 = await SES.sendEmail(params2).promise();

        console.log(result, result2);

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
           },
           body: JSON.stringify({status: 200}),
        };
    } catch (e) {
        console.error(e)
        return {
            statusCode: 400,
            body: 'Sending failed'
        }
    }
};
