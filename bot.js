const Discord = require("discord.js");
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();

client.on('ready', () => {
   console.log(`----------------`);
   console.log(`Credit Farmm - Script By : Kahrbaa `);
   console.log(`----------------`);
   console.log(`Loadinng`);
   console.log(`Loadinng.`);
   console.log(`Loadinng..`);
   console.log(`Loadinng...`);
   console.log(`This Bots Online ' `);
   console.log(`----------------`);
});


client.on('message', message => {
    if(message.content === '-راتب1'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '-1مبلغ'){
        message.channel.send('#credits')
    }
});

client.on('message', message => {
    if(message.content === '-1ريب'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-2راتب'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === '-مبلغ2'){
        message.channel.send('#credits')
    }
});

client2.on('message', message => {
    if(message.content === '-ريب2'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === '-3ريب'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === '-3مبلغ'){
        message.channel.send('#credits')
    }
});

client3.on('message', message => {
    if(message.content === '-راتب3'){
        message.channel.send('#daily')
    }
});

client4.on('message', message => {
    if(message.content === '-4راتب'){
        message.channel.send('#daily')
    }
});

client4.on('message', message => {
    if(message.content === '-مبلغ4'){
        message.channel.send('#credits')
    }
});

client4.on('message', message => {
    if(message.content === '-ريب4'){
        message.channel.send('#credits')
    }
});

client.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam1') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Khader The KIng**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client2.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam2') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Khader The KIng**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client3.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam3') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Khader The KIng**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client4.on('message', message => { // لا تغير شئ عشان ما تخرب الدنيا
if (message.content === '!spam4') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**Khader The KIng**[ " ${x} " ]`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login(process.env.TOKEN);// لا تغير فيها شيء
client2.login(process.env.TOKEN2);// لا تغير فيها شيء
client3.login(process.env.TOKEN3);// لا تغير فيها شيء
client4.login(process.env.TOKEN4);// لا تغير فيها شيء
