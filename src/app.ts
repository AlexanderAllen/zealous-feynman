
/**
 * Parse GPG record fields usign a regular expression.
 *
 * @param rawText Raw GPG output.
 *
 * @returns [] Array of parsed GPG records.
 */
export function parseKeyRecords(rawText: string) {

  const recordPattern = /(?<KeyRecordType>(?<fieldKeyType>pub|sub):(?<fieldKeyStatus>[^:]*):(?<fieldLength>[^:]*):(?<fieldPubKeyAlgo>[^:]*):(?<fieldKeyID>[^:]*):(?<fieldCreated>[^:]*):(?<fieldExpires>[^:]*):(?<fieldTrust>[^:]*):(?<fieldOwnerTrust>[^:]*):(?<fieldUserID>[^:]*):(?<fieldSigClass>[^:]*):(?<fieldCapability>[escaD?]+)\w*:(?:[^:]*:){4}(?<fieldCurveName>[^:]*):(?<fieldRest>[:\d]*)\n?)(?<FingerprintRecordType>^(?:fpr|fp2):(?:[^:]*:){8}(?<fingerprint>\w*):(?:[^:]*:)*?\n?)?(?<GripRecordType>^grp:(?:[^:]*:){8}(?<grip>\w*):(?:[^:]*:)*?\n?)?(?<IdentityRecordType>uid:(?=u)(?<fieldIdentityStatus>[^:]):(?:[^:]*):{3}(?<fieldIdentityCreated>[^:]*)(?:[^:]*):{2}(?<fieldIdentityID>[^:]*)(?:[^:]*):{2}(?<fieldIdentityComment>[^:]*):(?<fieldIdentityRest>[:\d]*)\n?)*/mg;
  let matchedIdentities;
  const identities = [];

  while ((matchedIdentities = recordPattern.exec(rawText)) !== null) {
      identities.push(matchedIdentities?.groups);
  }
  return identities;
}
