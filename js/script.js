var page = new Vue (
    {
        el: '#container',  //collegamento al file HTML
            data: {
                emails: [], //array vuoto in cui pushare le singole mail
            },

            mounted() {
                const self = this;  //variabile che si collega al this del vue

                // ciclo for che crea mail tramite axios
                for (let i = 0; i < 10; i++) {
                    
                    axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then(function(risultato){

                        // pushare le mail nell'array
                        self.emails.push(risultato.data.response);
                        
                    })
                }
            }


    }
)