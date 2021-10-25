
from icalendar import Calendar, Event
from datetime import datetime
from pytz import UTC # timezone
from datetime import date
# Returns the current local date
todayDate=date.today()
todayMonth=str(todayDate)
todayMonth=todayMonth[5:7]
todayDay=str(todayDate)
todayDay=todayDay[8:]
file1 = open('D:/MyProfile/Documents/CS Seminar/magicmirrormain/modules/MMM-SimpleText/athleticsevent.txt', 'w')
def findGame(textFile) :
    g = open(textFile,'rb')
    gcal = Calendar.from_ical(g.read())
    for component in gcal.walk():
        if component.name == "VEVENT":
            startTime=component.get('DTSTART').to_ical()
            startTimeString = startTime.decode('utf-8')
            startTimeString1=startTimeString[4:6]
            startTimeString2=startTimeString[6:8]
            if startTimeString1 == todayMonth and startTimeString2 == todayDay:
                menu=component.get('summary')
                menu2=component.get('location')   
                
                if menu != None and menu2 != None:
                    file1.write(menu)
                    file1.write('\n')
                    file1.write(menu2)
                    file1.write('\n')
                elif menu!= None:
                    file1.write(menu)
                    file1.write('\n')
                    file1.write('')
            else:
                menu=''
                file1.write(menu)
    g.close()
    
findGame('CrossCountryVBoysGirls.ics')
findGame('FieldHockeyVGirls.ics')
findGame('FieldHockeyJVGirls.ics')
# findGame('FootballJVBoys.ics')
findGame('FootballVBoys.ics')
findGame('SoccerJVBoys.ics')
findGame('SoccerVBoys.ics')
findGame('Soccer3Boys.ics')
findGame('SoccerVGirls.ics')
findGame('SoccerJVGirls.ics')
findGame('TennisVGirls.ics')
# findGame('TennisJVGirls.ics')
file1.close()
