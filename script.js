function nextGoals(event) {
    console.log(event)
    event.preventDefault()
    score.className="hidden"
    goals.className="shown"
}
nextgoals.onclick = nextGoals

function nextSpecific(event) {
    event.preventDefault()
    goals.className="hidden"
    specific.className="shown"
}
nextspecific1.onclick = nextSpecific
nextspecific2.onclick = nextSpecific
nextspecific3.onclick = nextSpecific

function nextMeasurable(event) {
    event.preventDefault()
    specific.className="hidden"
    measurable.className="shown"
}
nextmeasurable.onclick = nextMeasurable

function nextAchievable(event) {
    event.preventDefault()
    measurable.className="hidden"
    achievable.className="shown"
}
nextachievable.onclick = nextAchievable

function nextRelevant(event) {
    event.preventDefault()
    achievable.className="hidden"
    relevant.className="shown"
}
nextrelevant.onclick = nextRelevant

function nextTimed(event) {
    event.preventDefault()
    relevant.className="hidden"
    timed.className="shown"
}
nexttimed.onclick = nextTimed

function nextResult(event) {
    event.preventDefault()
    timed.className="hidden"
    result.className="shown"
}
nextresult.onclick = nextResult

function backScore(event) {
    console.log(event)
    event.preventDefault()
    goals.className="hidden"
    score.className="shown"
}
backscore.onclick = backScore


function backGoals(event) {
    console.log(event)
    event.preventDefault()
    specific.className="hidden"
    goals.className="shown"
}
backgoals.onclick = backGoals

function backSpecific(event) {
    event.preventDefault()
    measurable.className="hidden"
    specific.className="shown"
}
backspecific.onclick = backSpecific

function backMeasurable(event) {
    event.preventDefault()
    achievable.className="hidden"
    measurable.className="shown"
}
backmeasurable.onclick = backMeasurable

function backAchievable(event) {
    event.preventDefault()
    relevant.className="hidden"
    achievable.className="shown"
}
backachievable.onclick = backAchievable

function backRelevant(event) {
    event.preventDefault()
    timed.className="hidden"
    relevant.className="shown"
}
backrelevant.onclick = backRelevant
