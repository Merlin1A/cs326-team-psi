import os
import json
import random

def getTitle(courseTitle):
    ans = ""
    count = 0
    for c in courseTitle:
        if count == 2 and c == '<':
            break
        if count == 2:
            ans += c
        if c == '>':
            count += 1
    for i in range(len(ans)-1, -1, -1):
        if ans[i] != ' ':
            break
    return ans[:i+1]

def getHomepage(courseTitle):
    li = courseTitle.split('"')
    return li[1]

def getDescription(rawCourse):
    relevantInfo = rawCourse.split('>')[1][:-3]
    credits = ' '.join(relevantInfo[::-1].split(' ')[0:2])[::-1]
    course = relevantInfo[:-1*len(credits)]
    return course, credits

def getInstructors(instructorList):
    temp = instructorList.split(':')
    instructors = temp[1][1:-5].split(", ")
    return instructors

def getCourseCriteria(courseName):
    courseNumber = int(courseName[8:11])
    if courseNumber >= 400:
        return ["400+"]
    if courseNumber >= 300:
        return ["300+"]
    if courseNumber >= 200:
        return ["200+"]
    return []

courses = open("rawCourses.txt", "r").read()

courseDataList = courses.split('\n')
coursesInfoList = [[courseDataList[i] for i in range(j,j+3)] for j in
        range(0,len(courseDataList)-3,4)]

finalCourseList = []
for course in coursesInfoList:
    courseDict = {}
    courseDict["course_name"] = getTitle(course[0])
    courseDict["course_description"], courseDict["credits"] = getDescription(course[2])
    courseDict["course_homepage"] = getHomepage(course[0])
    courseDict["professors"] = getInstructors(course[1])
    courseDict["number_reviews"] = random.randint(50, 100)
    courseDict["number_ratings"] = random.randint(50, 100)
    courseDict["overall_difficulty"] = random.randint(50, 100)
    courseDict["overall_rating"] = random.randint(50, 100)
    courseDict["course_criteria"] = getCourseCriteria(courseDict["course_name"])
    courseDict["enjoyed_course"] = random.randint(50, 100)
    finalCourseList.append(courseDict)
    print(courseDict["course_description"])

with open('courses.json', 'w') as fp:
    json.dump(finalCourseList, fp, indent=4)
