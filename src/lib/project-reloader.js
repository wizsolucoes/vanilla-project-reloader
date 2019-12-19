import { HttpConnector } from './http-connector';

export class ProjectReloader {

    constructor(_fileName, _timeToCheck = 300000) {//5 minutos padrão
        
        this._startAutoRefreshToken();
        this.basePath = window.location.origin;
    }

    _startAutoRefreshToken() {

        clearInterval(this._ctrlRefreshInterval);
        this._ctrlRefreshInterval = setTimeout(() => {
            this._hashCheck()
                .then(
                    needToRenew => this._treateRenew(needToRenew)
                )
        }, Math.max(timeout, 0));
    }

    _treateRenew(needToRenew) {
        if (needToRenew) {
            window.alert('Seu projeto pode estar desatualizado, por favor utilize as teclas CTRL+SHIFT+R para forçar a atualização do projeto!');
        }

        this._startAutoRefreshToken();
    }

    _hashCheck() {

        return new Promise((resolve, reject) => {
            new HttpConnector(this.ssoTimeout)
                .request(
                    'get',
                    `${this.basePath}/${this._fileName}`,
                    'application/json'
                ).then((data) => {
                    var siteHash = window.localStorage.getItem('site-hash');
                    var needToRenew = siteHash && siteHash !== data.siteHash;                    
                    resolve(needToRenew);
                }, (error) => {
                    reject(error);
                });
        });

    }
}