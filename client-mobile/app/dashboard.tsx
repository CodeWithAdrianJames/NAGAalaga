import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Calendar, Activity, Bell, ChevronRight, CheckCircle2, AlertCircle, Baby } from 'lucide-react-native';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Purple Header Card */}
        <View style={styles.headerCard}>
          <View style={styles.headerTop}>
            <Text style={styles.welcomeText}>Marhay na aga, Ma'am!</Text>
            <Baby color="#fff" size={28} />
          </View>
          <Text style={styles.statusText}>Your 24th Week Progress</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '65%' }]} />
          </View>
        </View>

                {/* Action Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          {/* Changed <div> to <View> */}
          <View style={styles.grid}> 
            <TouchableOpacity style={styles.gridCard}>
              <View style={[styles.iconBox, { backgroundColor: '#7B1FA2' }]}>
                <Calendar color="#fff" size={20} />
              </View>
              <Text style={styles.cardLabel}>Next Checkup</Text>
              <Text style={styles.cardValue}>Jan 20</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.gridCard}>
              <View style={[styles.iconBox, { backgroundColor: '#4A148C' }]}>
                <Activity color="#fff" size={20} />
              </View>
              <Text style={styles.cardLabel}>Health Log</Text>
              <Text style={styles.cardValue}>Normal</Text>
            </TouchableOpacity>
          </View> 
          {/* Changed </div> to </View> */}
        </View>

        {/* Purple Alerts */}
        <View style={styles.section}>
          <View style={styles.titleRow}>
            <Text style={styles.sectionTitle}>Barangay Alerts</Text>
            <Bell size={16} color="#7B1FA2" />
          </View>
          
          <View style={styles.alertCard}>
            <CheckCircle2 color="#7B1FA2" size={20} />
            <View style={styles.alertTextContent}>
              <Text style={styles.alertTitle}>Vaccination Drive</Text>
              <Text style={styles.alertDesc}>Brgy. Calauag Hall - Today, 9AM</Text>
            </View>
            <ChevronRight color="#CCC" size={20} />
          </View>

          <View style={styles.alertCard}>
            <AlertCircle color="#BA68C8" size={20} />
            <View style={styles.alertTextContent}>
              <Text style={styles.alertTitle}>Prenatal Vitamin Refill</Text>
              <Text style={styles.alertDesc}>Visit the Health Center this week</Text>
            </View>
            <ChevronRight color="#CCC" size={20} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3E5F5' }, // Very light purple background
  scrollContent: { padding: 20 },
  headerCard: { backgroundColor: '#6A1B9A', padding: 25, borderRadius: 24, marginBottom: 25, elevation: 8, shadowColor: '#4A148C', shadowOpacity: 0.3, shadowRadius: 10 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  welcomeText: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  statusText: { color: '#E1BEE7', marginTop: 5, fontSize: 16 },
  progressBar: { height: 10, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 5, marginTop: 20 },
  progressFill: { height: 10, backgroundColor: '#EA80FC', borderRadius: 5 },
  section: { marginBottom: 25 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#4A148C', marginBottom: 15 },
  titleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  grid: { flexDirection: 'row', gap: 15 },
  gridCard: { flex: 1, backgroundColor: '#fff', padding: 15, borderRadius: 20, elevation: 3, borderBottomWidth: 3, borderBottomColor: '#E1BEE7' },
  iconBox: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 10 },
  cardLabel: { fontSize: 12, color: '#999' },
  cardValue: { fontSize: 16, fontWeight: 'bold', color: '#4A148C' },
  alertCard: { backgroundColor: '#fff', padding: 16, borderRadius: 16, flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 12, borderLeftWidth: 5, borderLeftColor: '#7B1FA2' },
  alertTextContent: { flex: 1 },
  alertTitle: { fontWeight: 'bold', color: '#4A148C' },
  alertDesc: { fontSize: 12, color: '#777' }
});