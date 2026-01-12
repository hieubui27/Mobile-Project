package com.master.uniflow.data.local

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.sqlite.db.SupportSQLiteDatabase
import com.master.uniflow.data.local.model.*

@Database(
    entities = [UserEntity::class, SubjectEntity::class, ScheduleEntity::class, TaskEntity::class],
    version = 2, // Tăng lên 2 vì chúng ta vừa thêm bảng User và Schedule
    exportSchema = false
)
abstract class AppDatabase : RoomDatabase() {
    abstract fun appDao(): AppDao

    companion object {
        @Volatile
        private var INSTANCE: AppDatabase? = null

        fun getDatabase(context: Context): AppDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    AppDatabase::class.java,
                    "uniflow_db"
                )
                    .addCallback(object : RoomDatabase.Callback() {
                        override fun onCreate(db: SupportSQLiteDatabase) {
                            super.onCreate(db)
                            // Chạy lệnh SQL trực tiếp để tạo User ngay khi tạo DB
                            db.execSQL("INSERT INTO users (userId, fullName, studentCode) VALUES ('local_user', 'Student', '0000')")
                        }
                    })
                    .fallbackToDestructiveMigration()
                    .build()
                INSTANCE = instance
                instance
            }
        }
    }
}