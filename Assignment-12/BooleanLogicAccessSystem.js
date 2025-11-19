// Q5. Boolean Logic Access System
// A smart home system checks multiple security conditions.
// Requirements:
// ● Variables: isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside.
// ● Access is granted only if:
// ○ Alarm is on
// ○ Door and window are closed
// ○ Owner is inside
// ● Use Boolean logic (&&, ||, !) to print “Secure” or “Unsafe”.
// ● Change values and test multiple outcomes.

console.log("===== BOOLEAN LOGIC ACCESS SYSTEM =====\n");

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurity() {
    let secure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
    console.log(`
Status:
- Door Locked: ${isDoorLocked}
- Window Closed: ${isWindowClosed}
- Alarm On: ${isAlarmOn}
- Owner Inside: ${isOwnerInside}

System Result: ${secure ? "Secure" : "Unsafe"}
----------------------------------------------
`);
}

checkSecurity();

isDoorLocked = false;
isOwnerInside = false;
checkSecurity();

isDoorLocked = true;
isWindowClosed = false;
isAlarmOn = false;
isOwnerInside = true;
checkSecurity();

console.log("========================================");