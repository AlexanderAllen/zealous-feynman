'use strict';

module.exports = {};

function parseKeyRecords(rawText) {
  // Match all non-revoked identities.
  let recordPattern = /(?<KeyRecordType>(?<fieldKeyType>pub|sub):(?<fieldKeyStatus>[^:]*):(?<fieldLength>[^:]*):(?<fieldPubKeyAlgo>[^:]*):(?<fieldKeyID>[^:]*):(?<fieldCreated>[^:]*):(?<fieldExpires>[^:]*):(?<fieldTrust>[^:]*):(?<fieldOwnerTrust>[^:]*):(?<fieldUserID>[^:]*):(?<fieldSigClass>[^:]*):(?<fieldCapability>[escaD?]+)\w*:(?:[^:]*:){4}(?<fieldCurveName>[^:]*):(?<fieldRest>[:\d]*)\n?)(?<FingerprintRecordType>^(?:fpr|fp2):(?:[^:]*:){8}(?<fingerprint>\w*):(?:[^:]*:)*?\n?)?(?<GripRecordType>^grp:(?:[^:]*:){8}(?<grip>\w*):(?:[^:]*:)*?\n?)?(?<IdentityRecordType>uid:(?=u)(?<fieldIdentityStatus>[^:]):(?:[^:]*):{3}(?<fieldIdentityCreated>[^:]*)(?:[^:]*):{2}(?<fieldIdentityID>[^:]*)(?:[^:]*):{2}(?<fieldIdentityComment>[^:]*):(?<fieldIdentityRest>[:\d]*)\n?)*/mg;
  let matchedIdentities;
  let identities = [];

  while ((matchedIdentities = recordPattern.exec(rawText)) !== null) {
      let test = null;
  }

}

// Output from GPG here
// gpg --fingerprint --fingerprint --with-keygrip --with-colon
let result = ``;

parseKeyRecords(result);

