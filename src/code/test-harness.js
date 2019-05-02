//= require support/ion_client
//= require orion/test_harness

describe('Test Harness', function () {

    it('check patientSelectedHandlerWithMetadata function call', function () {
        var event = new CustomEvent(ionClient.messaging.clientMessageEvent, {
            detail: {
                message: {
                    messageType: 'patientContextChanged',
                    metaData: {
                        patientId: '123',
                        encounterId: '456',
                        venue: 'Inpatient'
                    },
                    success: false
                }
            },
            bubbles: true,
            cancelable: true
        });
        spyOn(orionTestHarness, 'patientContextChanged');
        document.dispatchEvent(event);
        expect(orionTestHarness.patientContextChanged).toHaveBeenCalledWith(
            event.detail.message.metaData.patientId,
            event.detail.message.metaData.encounterId,
            event.detail.message.metaData.venue);
    });

    it('check patientSelectedHandlerWithMetadata function call if metaData is not present', function () {
        var event = new CustomEvent(ionClient.messaging.clientMessageEvent, {
            detail: {
                message: {
                    messageType: 'patientContextChanged',
                    success: false
                }
            },
            bubbles: true,
            cancelable: true
        });
        spyOn(ionClient.logger, 'info');
        document.dispatchEvent(event);
        expect(ionClient.logger.info).toHaveBeenCalledWith('Metadata was not sent with the messaging event');
    });

    it('check patientSelectedHandlerWithMetadata function call if the message type is not patient selected event', function () {
        var event = new CustomEvent(ionClient.messaging.clientMessageEvent, {
            detail: {
                message: {
                    messageType: 'error',
                    success: false
                }
            },
            bubbles: true,
            cancelable: true
        });
        spyOn(orionTestHarness, 'patientContextChanged');
        document.dispatchEvent(event);
        expect(orionTestHarness.patientContextChanged).not.toHaveBeenCalled();
    });
});
