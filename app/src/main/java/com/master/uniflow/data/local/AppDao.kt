package com.master.uniflow.data.local

import androidx.room.*
import com.master.uniflow.data.local.model.*
import kotlinx.coroutines.flow.Flow


@Dao
interface AppDao {

    @Upsert
    suspend fun upsertUser(user: UserEntity)

    @Query("SELECT * FROM users WHERE userId = :id")
    suspend fun getUserById(id: String = "local_user"): UserEntity?

    @Upsert
    suspend fun upsertSubject(subject: SubjectEntity)

    @Query("SELECT * FROM subjects")
    fun getAllSubjects(): kotlinx.coroutines.flow.Flow<List<SubjectEntity>>

    @Upsert
    suspend fun upsertSchedule(schedule: ScheduleEntity)

    @Query("SELECT * FROM schedules WHERE subjectId = :subId")
    suspend fun getSchedulesBySubject(subId: String): List<ScheduleEntity>

    @Query("""
        SELECT tasks.*, subjects.colorHex FROM tasks 
        INNER JOIN subjects ON tasks.subjectId = subjects.subjectId 
        ORDER BY deadline ASC
    """)
    fun getTasksWithMetadata(): kotlinx.coroutines.flow.Flow<List<TaskEntity>>
}