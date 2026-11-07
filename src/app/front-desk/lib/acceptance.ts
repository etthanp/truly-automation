export const ACCEPTANCE = [
  {id:'booking',title:'Real caller books a discovery call',instruction:'Call Riley. Confirm a date, Eastern time, name and number. Compare the saved appointment and transcript; record the call ID and booked time.'},
  {id:'callback',title:'Callback request reaches the dashboard',instruction:'Ask Riley to save a separate callback. Verify the caller, reason and Ethan assignment; acknowledge it and record the call ID.'},
  {id:'transfer',title:'A person accepts the live transfer',instruction:'Call from another phone. Ask for a person; Ethan answers 9976 and accepts. Confirm both callers can speak. A ringing phone alone is insufficient.'},
  {id:'no-answer',title:'Unanswered transfer returns safely',instruction:'Repeat the transfer and do not answer Ethan’s phone. Verify Riley resumes or the configured fallback answers, and a callback can be saved. Record what happened.'},
  {id:'conflict',title:'Unavailable time is never promised',instruction:'Block a time in Truly’s calendar and ask Riley for it. She must offer another time or human help. Confirm no overlapping appointment was saved.'},
  {id:'notification',title:'Phone receives a real callback alert',instruction:'Install the app, enable notifications, lock the phone and call Riley to save a new callback. Confirm an alert appears and opens the correct task.'},
  {id:'fallback',title:'Phone fallback works when AI is unavailable',instruction:'During a controlled test with no customer traffic, verify the phone provider routes to Ethan when the assistant is unavailable. Restore normal routing and record the evidence.'},
  {id:'recovery',title:'Recovery runs with the dashboard closed',instruction:'Verify a scheduled maintenance run persists its run time while this dashboard is closed. Record the scheduled run and check any resulting review tasks.'},
] as const;
export type AcceptanceId = typeof ACCEPTANCE[number]['id'];
