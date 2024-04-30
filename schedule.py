# coding=utf-8
import sqlite3
import sys
import re
from model import Model
class Schedule(Model):
    def __init__(self):
        self.con=sqlite3.connect(self.mydb)
        self.con.row_factory = sqlite3.Row
        self.cur=self.con.cursor()
        self.cur.execute("""create table if not exists schedule(
        id integer primary key autoincrement,
        user_id integer,
        debut time,
            fin time,
            date date,
            nbperson integer
                    );""")
        self.con.commit()
        #self.con.close()
    def getnbperson(self,scheduleid,nbenfant,nbadult):
        self.cur.execute("select schedule.*,schedule.id as scheduleid, count(booking.id) as nbbooking,count(schedule.id) as nbschedule,schedule.nbperson - sum(ifnull(booking.nbenfant,0) + ifnull(booking.nbadult,0)) - ? - ? spots from schedule left outer join booking on booking.schedule_id = schedule.id group by schedule.id having schedule.id = ?",(nbenfant, nbadult, scheduleid,))
        row=self.cur.fetchone()
        return row
    def getallbydate1(self,nbtour):
        self.cur.execute("select schedule.*,schedule.id as scheduleid, count(booking.id) as nbbooking,count(schedule.id) as nbschedule,schedule.nbperson - sum(ifnull(booking.nbenfant,0) + ifnull(booking.nbadult,0)) spots from schedule left outer join booking on booking.schedule_id = schedule.id group by schedule.id having schedule.date = ? and spots > 0",(nbtour,))

        row=self.cur.fetchall()
        return row
    def getallbydate(self,nbtour):
        self.cur.execute("select schedule.*, count(booking.id) as nbbooking,count(schedule.id) as nbschedule,(select count(s.id) from schedule s left outer join booking b on b.schedule_id = s.id group by s.id having s.nbperson - sum(ifnull(b.nbenfant,0) + ifnull(b.nbadult,0)) > 0 and s.date = schedule.date) notsoldout from schedule left outer join booking on booking.schedule_id = schedule.id where schedule.date = ? group by schedule.date",(nbtour,))

        row=self.cur.fetchone()
        return row
    def getall(self):
        self.cur.execute("select * from schedule")

        row=self.cur.fetchall()
        return row
    def deletebyid(self,myid):

        self.cur.execute("delete from schedule where id = ?",(myid,))
        job=self.cur.fetchall()
        self.con.commit()
        return None
    def getbyid(self,myid):
        self.cur.execute("select * from schedule where id = ?",(myid,))
        row=dict(self.cur.fetchone())
        print(row["id"], "row id")
        job=self.cur.fetchall()
        return row
    def create(self,params):
        print("ok")
        myhash={}
        for x in params:
            if 'confirmation' in x:
                continue
            if 'envoyer' in x:
                continue
            if '[' not in x and x not in ['routeparams']:
                #print("my params",x,params[x])
                try:
                  myhash[x]=str(params[x].decode())
                except:
                  myhash[x]=str(params[x])
        print("M Y H A S H")
        print(myhash,myhash.keys())
        myid=None
        try:
          self.cur.execute("insert into schedule (debut,fin,date,nbperson) values (:debut,:fin,:date,:nbperson)",myhash)
          self.con.commit()
          myid=str(self.cur.lastrowid)
        except Exception as e:
          print("my error"+str(e))
        azerty={}
        azerty["schedule_id"]=myid
        azerty["notice"]="votre schedule a été ajouté"
        return azerty




