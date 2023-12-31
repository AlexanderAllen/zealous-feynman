import { strict as assert } from 'assert';
import { parseKeyRecords } from '../app';

describe('GPG records are captured', () => {

  test('Capture pub/sub records', () => {
    // Output from GPG here
    // gpg --fingerprint --fingerprint --with-keygrip --with-colon
    const result: string = `
tru::1:1703741673:0:3:1:5
pub:u:255:22:E654F85F9355C636:1703740764:::u:::scESCA:::::ed25519:::0:
fpr:::::::::BC6C84CF5E8C58987C94342FE654F85F9355C636:
grp:::::::::EEAE8855537D0EDC1DC17D82DEF72D4A1DC7830B:
uid:u::::1703741622::2353A797D15AB4B3780455C5B5C8B5BD80A01CB4::Richard Allen (Drupal.org Contrib) <alexanderallen@351784.no-reply.drupal.org>::::::::::0:
uid:r::::::AB2233AA5E023BF80CD88B1F09973CE37E7B25FE::AlexanderAllen <14018885+AlexanderAllen@users.noreply.github.com>::::::::::0:
uid:u::::1703741726::BAA45D2F23DAE47B08F1A58F779E16B51BBAF930::AlexanderAllen (Github Contrib) <14018885+AlexanderAllen@users.noreply.github.com>::::::::::0:
sub:u:255:22:270CEE4C1E9FB5ED:1703740764::::::a:::::ed25519::
fpr:::::::::9307A48220BD32C90B126B29270CEE4C1E9FB5ED:
grp:::::::::81E2E9E688280C4F26028B0A7AF3FEEA035E1A26:
sub:u:255:18:3962538BD23FF567:1703740764::::::e:::::cv25519::
fpr:::::::::8353E6908D0BBFAFFCB003D83962538BD23FF567:
grp:::::::::49F3A130A449F009702D8FD77945CA1F8EA6B0DB:
`;

    const records = parseKeyRecords(result);

    assert.equal(3, records.length, 'Results contain three matches.');

    assert.equal(records[0]?.fieldKeyType, 'pub', 'First match is a pub record');
    assert(records[0]?.FingerprintRecordType !== '', 'First match fingerprint record is captured');
    assert(records[0]?.GripRecordType !== '', 'First match grip record is captured');
    assert(records[0]?.IdentityRecordType !== '', 'First match identity record is captured');

  })

});
