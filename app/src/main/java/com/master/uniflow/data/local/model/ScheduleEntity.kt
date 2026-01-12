package com.master.uniflow.data.local.model

import androidx.room.Entity
import androidx.room.ForeignKey
import androidx.room.PrimaryKey


@Entity(
    tableName = "schedules",
    foreignKeys = [
        ForeignKey(
            entity = SubjectEntity::class,
            parentColumns = ["subjectId"],
            childColumns = ["subjectId"],
            onDelete = ForeignKey.CASCADE
        )
    ]
)
data class ScheduleEntity(
    @PrimaryKey(autoGenerate = true) val scheduleId: Int = 0,
    val subjectId: String,
    val dayOfWeek: Int, // 2 -> 8 (Thứ 2 -> CN)
    val startTime: String, // "07:00"
    val endTime: String,   // "09:30"
    val room: String
)