type EventType = {
    callable: (...args) => void,
    context: any,
    oneOff: boolean
};

type EventingType = {
    events: {
        [key: string]: EventType[]
    },
    emitting: boolean,
    offIndex: number
};

export class Event {
    private _eventing: EventingType;

    constructor() {
        this._eventing = Object.create(null);
        this._eventing.events = Object.create(null);
        this._eventing.emitting = false;
        this._eventing.offIndex = null;
    }

    public emit(eventName: string, ...args: any[]): Event {
        const oneOffs = [];

        if (this._eventing.events[eventName] !== undefined) {
            let processing = true;
            const controlParams = {
                stopEvent: () => processing = false,
                sender: this
            };

            this._eventing.emitting = true;
            // eslint-disable-next-line no-unmodified-loop-condition
            for (let i = 0, length = this._eventing.events[eventName].length; i < length && processing; ++i) {
                const event = this._eventing.events[eventName][i];

                if (event) {
                    if (typeof event.callable === 'function') {
                        event.callable.apply(
                            event.context || this,
                            Array.prototype.concat(
                                args,
                                [controlParams]
                            ));
                        if (this._eventing.offIndex !== null) {
                            --length;
                            if (this._eventing.offIndex <= i) {
                                --i;
                            }
                        }
                    }

                    if (event.oneOff) {
                        oneOffs.push(i);
                    }
                }
            }
            this._eventing.emitting = false;

            if (oneOffs.length) {
                for (let i = 0, length = oneOffs.length; i < length; ++i) {
                    this._off(eventName, oneOffs[i]);
                }
            }
        }

        return this;
    }

    public off(eventName: string, callable: (...args) => void): Event {
        if (this._eventing.events[eventName] !== undefined) {
            for (const i in this._eventing.events[eventName]) {
                if (this._eventing.events[eventName][i].callable === callable) {
                    this._off(eventName, parseInt(i, 10));
                }
            }
        }

        return this;
    }

    public on(eventName: string, callable: (...args) => void, context?: any, oneOff?: boolean): Event {
        context = context || null;
        oneOff = oneOff || false;

        if (this._eventing.events[eventName] === undefined) {
            this._eventing.events[eventName] = [];
        }

        this._eventing.events[eventName].push({
            callable: callable,
            context: context,
            oneOff: oneOff
        });

        return this;
    }

    public one(eventName: string, callable: (...args) => void, context?: any): Event {
        return this.on(eventName, callable, context, true);
    }

    /* PRIVATE */
    private _off(eventName: string, index: number): void {
        this._eventing.events[eventName].splice(index, 1);
        if (this._eventing.emitting) {
            this._eventing.offIndex = index;
        }
    }
}
