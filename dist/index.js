"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class miracleAPI {
    static get(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(url, 'GET');
        });
    }
    static post(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(url, 'POST', data);
        });
    }
    static put(url, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(url, 'PUT', data);
        });
    }
    static delete(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(url, 'DELETE');
        });
    }
    static request(url, method, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.open(method, url);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.responseType = 'json';
                xhr.onload = () => {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        resolve(xhr.response);
                    }
                    else {
                        reject(xhr.statusText);
                    }
                };
                xhr.onerror = () => reject(xhr.statusText);
                xhr.send(data ? JSON.stringify(data) : null);
            });
        });
    }
}
exports.default = miracleAPI;
