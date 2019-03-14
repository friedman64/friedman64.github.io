<template>
    <div class="form">
        <div class="container">
            <div class="row">
                <div class="col-5">
                    <h3 class="section-title">Contact Us</h3>
                    <form class="form-inputs">
                        <div class="form-inputs-group" :class="{error : errors.name === true}">
                            <input type="text" v-model="form.name" @change="errors.name = false">
                            <label>Name</label>
                        </div>
                        <div class="form-inputs-group" :class="{error : errors.phone === true}">
                            <input type="number" v-model="form.phone" @change="errors.phone = false">
                            <label>Phone</label>
                        </div>
                        <div class="form-inputs-group" :class="{error : errors.email === true}">
                            <input type="text" v-model="form.email" @change="errors.email = false">
                            <label>E-mail</label>
                        </div>
                        <div class="form-inputs-checkbox" :class="{error : errors.checkbox === true}">
                            <label>
                                <input type="checkbox" v-model="form.checkbox" @change="errors.checkbox = false">
                                <span class="form-inputs-checkbox__text">I agree the processing of personal data</span>
                            </label>
                        </div>
                    </form>
                    <div v-if="showStatus" class="form__status" :class="{form__status_ok : isSend === true}">
                        <span v-for="text in statusText" :key="text">
                            {{text}}
                        </span>
                    </div>
                    <button :disabled="isSend" @click="validation" class="button">Get in touch</button>
                </div>
                <div class="col-5">
                    <div class="form-text">
                        Please tell us more about your request and give us info about your company and country
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data () {
            return {
                form: {
                    name: '',
                    phone: '',
                    email: '',
                    checkbox: false
                },
                isSend: false,
                errors: {
                  name: false,
                  phone: false,
                  email: false,
                  checkbox: false
                },
                showStatus: false,
                statusText: [],
                statuses: {
                    nameShort: 'Name is too short',
                    emailErr: 'Invalid e-mail format',
                    phoneErr: 'Invalid phone format',
                    err: 'Something wrong... Please try later',
                    persErr: 'Need your agreement with processing of personal data',
                    ok: 'Form is send! Thank you ;)'
                }
            }
        },
        methods: {
            validateEmail (email) {
                let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; /* eslint-disable-line */
                return reg.test(String(email).toLowerCase());
            },
            validatePhone (phone) {
              let reg = /^[0-9\+]{1,}[0-9\-]{3,15}$/; /* eslint-disable-line */
              return reg.test(String(phone).toLowerCase());
            },
            validation () {
                this.statusText = []
                this.showStatus = false
                this.errors = {
                    name: false,
                    phone: false,
                    email: false,
                    checkbox: false
                }

                if (this.form.name.length < 2) {
                    this.statusText.push(this.statuses.nameShort)
                    this.errors.name = true
                    this.showStatus = true
                }

                if (!this.validateEmail(this.form.email)) {
                    this.statusText.push(this.statuses.emailErr)
                    this.errors.email = true
                    this.showStatus = true
                }

                if (!this.validatePhone(this.form.phone)) {
                    this.statusText.push(this.statuses.phoneErr)
                    this.errors.phone = true
                    this.showStatus = true
                }

                if (!this.form.checkbox) {
                    this.statusText.push(this.statuses.persErr)
                    this.errors.checkbox = true
                    this.showStatus = true
                }

                if (this.showStatus === false) {
                    this.sendForm()
                }

            },
            sendForm () {
                let self = this
                axios.post('http://httpbin.org/post', this.form )
                    .then(function (res) {
                        console.log(res) /* eslint-disable-line no-console */
                        self.statusText.push(self.statuses.ok)
                        self.showStatus = true
                        self.isSend = true
                    })
                    .catch(function (err) {
                        console.log(err) /* eslint-disable-line no-console */
                        self.statusText.push(self.statuses.err)
                        self.showStatus = true
                    })
            }
        }
    }
</script>